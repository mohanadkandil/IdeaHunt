import { ideasData } from "../../data/ideas"

export default function Profile() {
  return (
    <div className="h-full w-full bg-[#2E2F37]">
      <div className="flex items-center justify-between mb-10 p-5 w-full bg-[#3A3B43]">
        <span className="text-white font-semibold text-2xl">IdeaHunt</span>
        <button className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold hover:bg-[#00B389] transition ease-in-out delay-150">
          Register
        </button>
      </div>
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
          {ideasData.map((user, index) => {
            return (
              <div
                key={index}
                className="w-[342px] text-white h-[250px] hover:border-[#00B389] border-2 bg-[#3A3B43] rounded-[10px] transition ease-in-out delay-150"
              >
                <div className="px-4 py-4">
                  <div className="mb-4">
                    <div className="flex space-x-3 mb-6">
                      <span>By {user?.user}</span>
                      <span>{user?.category}</span>
                      <span>{user?.date}</span>
                    </div>
                    <p>{user?.content}</p>
                  </div>
                  <div className="flex justify-center pt-7 space-x-4">
                    <button className="w-12 flex items-center justify-center h-12 rounded-lg bg-[#2E2F37] hover:bg-[#00B389] transition ease-in-out delay-150">
                      🙋‍♂️
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2E2F37] hover:bg-[#00B389] transition ease-in-out delay-150">
                      💰
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
