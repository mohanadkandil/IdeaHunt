import { useState, Fragment, Suspense } from "react"
import Header from "../components/Header"
import IdeaCard from "../components/IdeaCard"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import IdeasFeed, { IdeasFeedLoading } from "../features/IdeasFeed"

export default function IdeasPage() {
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

  const { data: ideas, error } = useSWR(
    "http://localhost:3000/api/posts",
    fetcher,
    {
      suspense: true,
    }
  )

  return (
    <>
      <Header />
      <Suspense fallback={<IdeasFeedLoading />}>
        <IdeasFeed ideas={ideas} />
      </Suspense>
    </>
  )
}
