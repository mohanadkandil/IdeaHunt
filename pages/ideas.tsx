import { useState, Fragment } from "react"
import Header from "../components/Header"
import IdeaCard from "../components/IdeaCard"
import { ideasData } from "../data/ideas"
import { Dialog, Transition } from "@headlessui/react"
import { IoMdClose } from "react-icons/io"
import { useRouter } from "next/router"

export default function IdeasPage() {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="h-screen w-screen bg-[#2E2F37]">
        <Header />
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
                🙋‍♂️I would use this
              </button>
              <button className="w-[170px] p-1 text-center bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
                💰I will buy it
              </button>
              <button className="w-[170px] text-center p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
                Latest Ideas
              </button>
            </div>
            <div className="h-full w-full flex items-center flex-wrap gap-10">
              {ideasData.map((user, index) => {
                return (
                  <IdeaCard
                    key={index}
                    name={user?.name}
                    category={user?.category}
                    content={user?.content}
                    date={user?.date}
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
