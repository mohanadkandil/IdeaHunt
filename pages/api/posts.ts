import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  const posts = prisma.post.findMany({
    orderBy: {
      created: "desc",
    },
    include: {
      reactedPosts: {
        select: {
          id: true,
        },
      },
    },
  })
  res.json(posts)
}
