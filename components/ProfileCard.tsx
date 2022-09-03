import { formatDistanceToNow } from "date-fns"

export default function ProfileCard({ post }: { post: any }) {
  const { content, topic, created, likedByUsers, supportedByUsers }: any = post

  return (
    <div className="w-[400px] h-[270px] text-white hover:border-[#00C6C0] border-2 bg-[#3A3B43] rounded-[10px] transition ease-in-out delay-150">
      <div className="px-4 w-full h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex space-x-3 pt-4">
            <span className="text-[#00C6C0] font-medium">{topic}</span>
            <span>
              {formatDistanceToNow(new Date(created)).replace("about", "")} ago
            </span>
          </div>
          <div className="my-4">
            <p>{content}</p>
          </div>
          <div className="flex justify-center items-end w-full h-full space-x-2 py-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-[25px]">😐</span>
              <span className="text-xl font-semibold">
                {likedByUsers.length}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-[25px]">💡</span>
              <span className="text-xl font-semibold">
                {supportedByUsers.length}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-[25px]">🤑</span>
              <span className="text-xl font-semibold">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
