import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient();
{
  globalThis.prisma = db;
}

/*

globalThis.prisma This global variable ensures that the prisma client
instance is reused across hot reloads during development . 
With out this each time your app reloads a new instance off the prisma
client would be created potentially leading to connection issues

*/
