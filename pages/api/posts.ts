import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany({
    orderBy: {
      created: "desc",
    },
    include: {
      likedByUsers: {
        select: {
          id: true,
        },
      },
      supportedByUsers: {
        select: {
          id: true,
        },
      },
    },
  })
  res.json(posts)
}
