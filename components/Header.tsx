import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between py-5 px-16 w-full bg-[#3A3B43]">
      <button onClick={() => router.push("/")}>
        <span className="text-white font-semibold text-3xl">
          Idea<span className="text-[#00C6C0]">H</span>unt
        </span>
      </button>
      <button className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
        Register
      </button>
    </div>
  )
}
