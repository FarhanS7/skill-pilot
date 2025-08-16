import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();
{
  globalThis.prisma = db;
}
