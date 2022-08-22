import Header from "../../components/Header"
import IdeaCard from "../../components/IdeaCard"
import { ideasData } from "../../data/ideas"

export default function Profile() {
  return (
    <div className="h-full w-full bg-[#2E2F37]">
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="w-[222px] h-[222px] bg-gray-100 rounded-full"></div>
        <span className="text-gray-100 font-semibold text-3xl">
          FirstName LastName
        </span>
        <span className="text-gray-100 font-semibold text-3xl">
          Your{" "}
          <span className="text-[#00B389] font-semibold text-3xl">
            Ideas 🚀
          </span>
        </span>
        <div className="grid grid-rows-4 grid-flow-col gap-10">
          {ideasData.map((user, index) => (
            <IdeaCard
              key={index}
              name={user?.name}
              category={user?.category}
              content={user?.content}
              date={user?.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
