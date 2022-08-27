import { useRouter } from "next/router"
import { useState } from "react"
import SignInPopup from "./SignInPopup"

export default function Header() {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <SignInPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <div className="flex items-center justify-between py-5 px-16 w-full bg-[#3A3B43]">
        <button onClick={() => router.push("/")}>
          <span className="text-white font-semibold text-3xl">
            Idea<span className="text-[#00C6C0]">H</span>unt
          </span>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150"
        >
          Register
        </button>
      </div>
    </>
  )
}
