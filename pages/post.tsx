import Header from "../components/Header"
import PostIdea from "../features/PostIdea"

export default function Post() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <PostIdea />
      </div>
    </>
  )
}
