import { Elysia } from "elysia";
import { authRoter } from "./controller/auth";
import { openapi, fromTypes } from "@elysiajs/openapi";
import jwt from "@elysiajs/jwt";
import { serviceRouter } from "./controller/serviceRouter";

export const jwtPlugin = new Elysia();
const app = new Elysia()
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
    }),
  )
  .use(authRoter)
  .use(serviceRouter)
  .get("/", () => "Hello Elysia")
  .get("/ip", ({ server, request }) => {
    return server?.requestIP(request);
  })
  .use(openapi({ references: fromTypes() }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
