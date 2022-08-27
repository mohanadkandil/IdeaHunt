import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content, topic } = req.body
  const session = await getSession({ req })

  const result = await prisma.post.create({
    data: {
      content: content,
      topic: topic,
      username: session?.user?.name,
      author: { connect: { email: String(session?.user?.email) } },
    },
  })
  return res.json(result)
}
