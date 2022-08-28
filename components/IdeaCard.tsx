export default function IdeaCard({
  name,
  category,
  date,
  content,
}: {
  name: string
  category: string
  date: string
  content: string
}) {
  return (
    <div className="w-[342px] text-white h-[230px] cursor-pointer hover:border-[#00C6C0] border-2 bg-[#3A3B43] rounded-[10px] transition ease-in-out delay-150">
      <div className="px-4 py-4">
        <div className="mb-4">
          <div className="flex space-x-3 mb-6">
            <span>
              By <span className="text-[#00C6C0] font-medium">{name}</span>
            </span>
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <p>{content}</p>
        </div>
        <div className="flex justify-center pt-3 space-x-4">
          <button className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#2E2F37] hover:bg-white/80 transition ease-in-out delay-150">
            <span className="text-[25px]">😐</span>
          </button>
          <button className="w-11 flex items-center justify-center h-11 rounded-lg bg-[#2E2F37] hover:bg-white/80 transition ease-in-out delay-150">
            <span className="text-[25px]">💡</span>
          </button>
          <button className="w-11 flex items-center justify-center h-11 rounded-lg bg-[#2E2F37] hover:bg-white/80 transition ease-in-out delay-150">
            <span className="text-[25px]">🤑</span>
          </button>
        </div>
      </div>
    </div>
  )
}
