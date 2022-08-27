import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between p-5 w-full bg-[#3A3B43]">
      <button
        onClick={() => router.push("/")}
        className="text-white font-semibold text-2xl"
      >
        IdeaHunt
      </button>
      <button className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
        Register
      </button>
    </div>
  )
}
