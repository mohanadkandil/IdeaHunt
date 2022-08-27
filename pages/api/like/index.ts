import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

const prisma = new PrismaClient()

export default async function like(req: NextApiRequest, res: NextApiResponse) {
  const session = getSession({ req })
  const { userId }: any = session
  const post = await prisma.post.findUnique({
    where: {
      id: req.body.postId,
    },
    include: {
      reactedPosts: {
        select: {
          id: true,
        },
      },
    },
  })
  const isReacted = post?.reactedPosts?.some(
    (reaction) => reaction.id === userId
  )

  if (isReacted === true) {
    const result = await prisma.post.update({
      where: { id: req.body.postId },
      data: {
        reactedPosts: {
          disconnect: { id: userId },
        },
      },
      include: {
        reactedPosts: {
          select: {
            id: true,
          },
        },
      },
    })
    res.json(result)
  }

  if (isReacted === false) {
    const result = await prisma.post.update({
      where: { id: req.body.postId },
      data: {
        reactedPosts: {
          connect: { id: userId },
        },
      },
      include: {
        reactedPosts: {
          select: {
            id: true,
          },
        },
      },
    })
    res.json(result)
  }
}
