import type { JWT } from "@elysiajs/jwt";

export interface User {
  id: string;
  email: string;
  role: "USER" | "SERVICE_PROVIDER";
}

declare module "elysia" {
  interface ElysiaContext {
    jwt: JWT;
    user: JwtPayload;
  }
}
