import { Elysia, t } from "elysia";
import { prisma } from "../../db";

export const authRoter = new Elysia({ prefix: "/api" })
  .post(
    "/register",
    async ({ body, status }) => {
      const existing = await prisma.user.findUnique({
        where: { email: body.email },
      });
      if (existing) {
        return status(409, { error: "user already exist" });
      }
      const passwordHash = await Bun.password.hash(body.password, {
        algorithm: "bcrypt",
        cost: 5,
      });
      await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          passwordHash,
          role: body.role,
        },
      });
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
        role: t.Enum({ USER: "USER", SERVICE_PROVIDER: "SERVICE_PROVIDER" }),
      }),
      response: {
        409: t.Object({ error: t.String() }),
      },
    },
  )
  .post(
    "/login",
    async ({ jwt, body, status }) => {
      const user = await prisma.user.findUnique({
        where: { email: body.email },
      });
      if (!user) {
        return status(404, { error: "user not found" });
      }
      const correctPassword = await Bun.password.verify(
        body.password,
        user.passwordHash,
      );
      if (!correctPassword) {
        return status(404, { error: "incorrect password" });
      }
      const tokenForUser = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
      const token = await jwt.sign(tokenForUser);
      return status(201, { token: token });
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    },
  );
