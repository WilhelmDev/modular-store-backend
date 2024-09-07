import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const generateRoles = async () => {
  try {
    const roles = [
      {
        name: "admin",
      },
      {
        name: "employee",
      },
    ];
    const createdRoles = await prisma.role.createMany({
      data: roles
    })
    return `se han generado ${createdRoles.count} roles}`;
  } catch {
    return "Error generating roles";
  }
}

async function run() {
  const result = await prisma.role.findMany();
  console.log(result);
}

run();