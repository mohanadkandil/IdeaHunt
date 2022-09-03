import Image from "next/image"
import { Suspense, useState } from "react"
import IdeaCard from "../components/IdeaCard"
import useSWR from "swr"
import ProfileCard from "../components/ProfileCard"

export const Profile = ({ userId }: { userId: string }) => {
  const [showPopup, setShowPopup] = useState(false)
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: user, error } = useSWR(`/api/profile/${userId}`, fetcher, {
    suspense: true,
  })
  if (error) return <div>An error occured</div>
  if (!user) return <div>Loading....</div>

  return (
    <>
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
        {user?.posts?.length ? (
          <span className="text-gray-100 font-semibold text-3xl">
            Your{" "}
            <span className="text-[#00C6C0] font-semibold text-3xl">
              Ideas 🚀
            </span>
          </span>
        ) : null}

        {!user?.posts?.length ? (
          <span className="text-gray-100 font-semibold text-3xl">
            Let&apos;s post your{" "}
            <span className="text-[#00C6C0] font-semibold text-3xl">
              Idea 🚀
            </span>
          </span>
        ) : null}
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 justify-center py-5">
        {user?.posts?.map((post: any, index: number) => (
          <ProfileCard post={post} key={index} />
        ))}
      </div>
    </>
  )
}

export const ProfileLoading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-5 py-10">
        <div className="w-[222px] h-[222px] rounded-full bg-gray-100 animate-pulse" />
        <div className="bg-gray-100 w-64 h-8 animate-pulse"></div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 justify-center py-5">
        {[...Array(4)].map((_, index) => (
          <div
            className="w-[400px] h-[270px] bg-gray-100 animate-pulse rounded-[10px]"
            key={index}
          ></div>
        ))}
      </div>
    </>
  )
}
