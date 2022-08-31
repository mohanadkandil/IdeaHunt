import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Fetch data for User profile

export default async function user(req, res) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.query.userId,
    },

    select: {
      name: true,
      image: true,
      posts: {
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
      },
      // likedPosts: true,
      // supportedPosts: true
    },
  })
  res.json(user)
}
