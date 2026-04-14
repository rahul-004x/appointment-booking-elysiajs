import { Elysia, status, t } from "elysia";
import { prisma } from "../../db";

export interface User {
  id: string;
  email: string;
  role: "USER" | "SERVICE_PROVIDER";
}

export const serviceRouter = new Elysia({ prefix: "/services" })
  .get(
    "/",
    async ({ status, query: { type } }) => {
      let where = {};
      if (type) {
        where = type ? { type: type?.trim().toUpperCase() } : {};
      }
      const service = await prisma.service.findMany({
        where,
      });
      return status(200, { data: service });
    },
    {
      query: t.Object({
        type: t.Optional(t.Uppercase(t.String())),
      }),
    },
  )
  .derive(async ({ jwt, headers, status }) => {
    const token = headers.authorization?.split(" ")[1];
    if (!token) return status(404, { error: "UNAUTHORIZE" });
    const palyload = (await jwt.verify(token)) as User;
    return {
      user: palyload,
    };
  })
  .macro({
    role: (required: string) => ({
      async resolve({ status, user }) {
        if (!user) return status(401, { error: "UNAUTHORIZE" });
        if (user.role !== required) return status(403, { error: "FORBIDDEN" });
      },
    }),
  })
  .post(
    "/",
    async ({ user, body: { name, durationMinutes, type } }) => {
      const service = await prisma.service.create({
        data: {
          name,
          providerId: { connect: { id: user.id } },
          durationMinutes,
          type,
        },
      });
      return status(201, { data: service });
    },
    {
      body: t.Object({
        name: t.String(),
        durationMinutes: t.Number({
          multipleOf: 30,
          minimum: 30,
          maximum: 120,
        }),
        type: t.Enum({
          MEDICAL: "MEDICAL",
          HOUSE_HELP: "HOUSE_HELP",
          BEAUTY: "BEAUTY",
          FITNESS: "FITNESS",
          EDUCATION: "EDUCATION",
          OTHER: "OTHER",
        }),
      }),
      role: "SERVICE_PROVIDER",
    },
  );
