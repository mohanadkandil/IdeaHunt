import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import useSWR from "swr"
import Header from "../../components/Header"
import IdeaCard from "../../components/IdeaCard"

export default function Profile() {
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()
  const { userId } = router.query
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: user, error } = useSWR(`/api/profile/${userId}`, fetcher)
  if (error) return <div>An error occured</div>
  if (!user) return <div>Loading....</div>
  console.log(typeof user)
  console.log(user?.posts)
  return (
    <div className="h-full w-full bg-[#2E2F37]">
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5 py-10">
        {[user].map((user: any) => {
          return (
            <>
              <Image
                className="w-[222px] h-[222px] bg-gray-100 rounded-full bg-cover"
                src={user?.image}
                alt={user?.name}
                width="222px"
                height="222px"
              />
              <span className="text-gray-100 font-semibold text-3xl">
                {user.name}
              </span>
            </>
          )
        })}
        <span className="text-gray-100 font-semibold text-3xl">
          Your{" "}
          <span className="text-[#00B389] font-semibold text-3xl">
            Ideas 🚀
          </span>
        </span>
        <div className="grid grid-rows-4 grid-flow-col gap-10">
          {user?.posts?.map((post: any, index: number) => (
            <IdeaCard
              key={index}
              post={post}
              postId={post.id}
              setShowPopup={setShowPopup}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
