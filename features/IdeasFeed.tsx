import { useState, Fragment } from "react"
import IdeaCard from "../components/IdeaCard"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import useSWR from "swr"

export default function IdeasFeed({ ideas }: { ideas: object }) {
  const [category, setCategory] = useState({ label: "all", value: "all" })
  const { data: session, status } = useSession()
  const router = useRouter()
  const [setShowPopup] = useState(false)
  const [open, setOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  console.log(ideas)

  return (
    <>
      <div className="min-h-screen">
        <div className="mt-10">
          <div className="flex p-5">
            <div className="mr-16 ml-12 flex flex-col space-y-8 h-full justify-center border-2 border-white bg-[#00C6C0] rounded-xl p-5">
              <button
                onClick={() => router.push("/post")}
                className="w-[170px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150"
              >
                Submit Your Idea!
              </button>
              <span className="text-white font-semibold text-sm">Sort by</span>
              <button className="w-[170px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
                <span>🙋‍♂️I would use it</span>
              </button>
              <button className="w-[170px] p-1 text-center bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
                <span>💵I will buy it</span>
              </button>
              <button className="w-[170px] text-center p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
                Latest Ideas
              </button>
            </div>
            <div className="h-full w-full flex items-center flex-wrap gap-10">
              {ideas?.map((idea: object, index: number) => {
                return (
                  <IdeaCard
                    key={index}
                    post={idea}
                    postId={idea}
                    setShowPopup={setShowPopup}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const IdeasFeedLoading = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-10">
        <div className="flex p-5">
          <div className="mr-16 ml-12 h-[336px] w-[214px] bg-gray-100 animate-pulse rounded-xl p-5" />
          <div className="h-full w-full flex items-center flex-wrap gap-10">
            {[...Array(6)]?.map((_, index) => (
              <div
                className="w-[350px] h-[230px] bg-gray-100 animate-pulse rounded-[10px]"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
