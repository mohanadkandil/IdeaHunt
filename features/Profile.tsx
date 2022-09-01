import Image from "next/image"
import { useState } from "react"
import IdeaCard from "../components/IdeaCard"

const Profile = ({ user }) => {
  const [showPopup, setShowPopup] = useState(false)

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
        <span className="text-gray-100 font-semibold text-3xl">
          Your{" "}
          <span className="text-[#00C6C0] font-semibold text-3xl">
            Ideas 🚀
          </span>
        </span>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 justify-center py-5">
        {user?.posts?.map((post: any, index: number) => (
          <IdeaCard
            isProfile={true}
            key={index}
            post={post}
            postId={post.id}
            setShowPopup={setShowPopup}
          />
        ))}
      </div>
    </>
  )
}

export default Profile
