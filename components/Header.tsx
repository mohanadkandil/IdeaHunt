import { useRouter } from "next/router"
import { useState } from "react"
import SignInPopup from "./SignInPopup"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
export default function Header() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <SignInPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <div className="flex items-center justify-between py-4 px-16 w-full bg-[#3A3B43]">
        <button onClick={() => router.push("/")}>
          <span className="text-white font-semibold text-3xl">
            Idea<span className="text-[#00C6C0]">H</span>unt
          </span>
        </button>
        {session && session.user ? (
          <button
            onClick={() => router.push(`/user/${session.userId} `)}
            className="w-[60px] h-[60px] rounded-full p-1 bg-white text-lg font-semibold hover:bg-[#00C6C0] transition ease-in-out delay-150"
          >
            <Image
              className="rounded-full"
              src={session?.user?.image}
              width="60px"
              height="60px"
              alt=""
            />
          </button>
        ) : null}

        {!session ? (
          <button
            onClick={() => setShowPopup(true)}
            className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150"
          >
            Register
          </button>
        ) : null}
      </div>
    </>
  )
}
