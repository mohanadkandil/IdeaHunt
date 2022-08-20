import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Fetch data for User profile

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const user = prisma.user.findUnique({
    where: {
      id: req.query.userId,
    },
    select: {
      name: true,
      image: true,
      posts: {
        include: {
          reactedPosts: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })
  res.json(user)
}
