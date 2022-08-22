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
    <div className="w-[342px] text-white h-[250px] hover:border-[#00B389] border-2 bg-[#3A3B43] rounded-[10px] transition ease-in-out delay-150">
      <div className="px-4 py-4">
        <div className="mb-4">
          <div className="flex space-x-3 mb-6">
            <span>By {name}</span>
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <p>{content}</p>
        </div>
        <div className="flex justify-center pt-7 space-x-4">
          <button className="w-12 flex items-center justify-center h-12 rounded-lg bg-[#2E2F37] hover:bg-[#00B389] transition ease-in-out delay-150">
            🙋‍♂️
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2E2F37] hover:bg-[#00B389] transition ease-in-out delay-150">
            💰
          </button>
        </div>
      </div>
    </div>
  )
}
