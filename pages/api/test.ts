import { PrismaClient, User } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(
  req: any,
  res: { json: (arg0: User[]) => any }
) {
  const users = await prisma.user.findMany({
    where: { email: { contains: "spokn" } },
  })
  return res.json(users)
}
