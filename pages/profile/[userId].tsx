import { useRouter } from "next/router"
import { Suspense } from "react"
import Header from "../../components/Header"
import { Profile, ProfileLoading } from "../../features/Profile"

export default function ProfilePage() {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <Header />
      <Suspense fallback={<ProfileLoading />}>
        <Profile userId={userId} />
      </Suspense>
    </>
  )
}
