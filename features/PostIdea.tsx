import React, { useState, useEffect } from "react"

import { topics } from "../data/topics"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

const PostIdea = () => {
  const [content, setContent] = useState("")
  const [topic, setTopic] = useState("")
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push("/")
  }, [session])

  const handlePostIdea = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const body = { content: content, topic: topic }

      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      // await router.push("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <span className="text-5xl flex justify-center font-medium leading-6 text-white">
        <span>
          Let&apos;s validate your{" "}
          <span className="text-[#00B389] font-bold">idea</span>
        </span>
      </span>
      <div className="flex justify-center">
        <p className="text-lg text-white">
          Write about your idea and let&apos;s look at people votings!
        </p>
      </div>
      <form
        onSubmit={handlePostIdea}
        className="flex flex-col justify-center items-center py-10 space-y-10"
      >
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="What product do you think should exist?"
          className="font-Notosans h-[200px] outline-none p-2 rounded-lg mx-auto ark:bg-[#00B389] dark:text-black text-lg border my-2 w-[450px]"
        />
        <select
          onChange={(e) => setTopic(e.target.value)}
          className="text-sm px-1 rounded-[5px] block w-[250px] h-[30px] text-black dark:bg-white"
        >
          {topics?.map((topic, index) => {
            return (
              <option value={topic} key={index}>
                {topic}
              </option>
            )
          })}
        </select>

        <button className="text-black font-semibold rounded-[5px] bg-white h-10 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#00B389] duration-300">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PostIdea
