import Header from "../components/Header"
import PostIdea from "../features/PostIdea"

export default function Post() {
  return (
    <div className="h-full w-full bg-[#2E2F37]">
      <Header />
      <div className="py-10">
        <PostIdea />
      </div>
    </div>
  )
}
