export default function Header() {
  return (
    <div className="flex items-center justify-between p-5 w-full bg-[#3A3B43]">
      <span className="text-white font-semibold text-2xl">IdeaHunt</span>
      <button className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
        Register
      </button>
    </div>
  )
}
