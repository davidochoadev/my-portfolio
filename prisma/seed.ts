import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import works from "./works.json";

const prisma = new PrismaClient();

async function seed() {
  const email = "davideochoa.dev@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  for(var i = 0; i < works.length; i++) {
    await prisma.work.create({
      data : {
        title : works[i].title || "",
        picture_url: works[i].picture_url || "",
        preview_url: works[i].preview_url || "",
        repo_url: works[i].repo_url || "",
      }
    });
  };

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      coding: {
        create:{},
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
