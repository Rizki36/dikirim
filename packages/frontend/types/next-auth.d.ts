import { UserRole } from "constans/Auth";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  class Session implements DefaultSession {
    user?: {
      name?: string;
      email?: string;
      image?: string;
      role?: UserRole;
    };
    expires: string;
  }

  class User implements DefaultUser {
    id: string;
    email?: string;
    image?: string;
    name?: string;
    role?: UserRole;
  }
}
