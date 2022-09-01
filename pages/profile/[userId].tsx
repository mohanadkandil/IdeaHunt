import { useRouter } from "next/router"
import useSWR from "swr"
import Header from "../../components/Header"
import Profile from "../../features/Profile"

export default function ProfilePage() {
  const router = useRouter()
  const { userId } = router.query
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: user, error } = useSWR(`/api/profile/${userId}`, fetcher)
  if (error) return <div>An error occured</div>
  if (!user) return <div>Loading....</div>
  return (
    <>
      <Header />
      <div>
        <Profile user={user} />
      </div>
    </>
  )
}
