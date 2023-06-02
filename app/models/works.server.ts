import type { Work } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Work } from "@prisma/client";

export function getWork(
   id : Work["id"]) {
   return prisma.work.findUnique({
      where: {
         id: id
      }
   });
 };

 export function getWorks() {
   return prisma.work.findMany({
      take: 10
   });
 }