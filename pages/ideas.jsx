export default function IdeasPage() {
  return (
    <>
      <div className="h-screen w-screen bg-[#2E2F37]">
        <div className="flex items-center justify-between mb-10 p-5 w-full bg-[#3A3B43]">
          <span className="text-white font-semibold text-2xl">IdeaHunt</span>
          <button className="w-[140px] p-1 bg-white rounded-md text-lg font-semibold">
            Register
          </button>
        </div>
        <div>
          <div className="flex">
            <div className="p-5 mr-20 ml-12 flex flex-col space-y-4">
              <button className="w-[170px] p-1 bg-white rounded-md text-lg font-semibold">
                Submit Your Idea!
              </button>
              <span className="text-white font-semibold text-sm">Sort by</span>
              <button className="w-[170px] p-1 bg-white rounded-md text-lg font-semibold">
                🙋‍♂️I would use this
              </button>
              <button className="w-[170px] p-1 text-center bg-white rounded-md text-lg font-semibold">
                💰I will buy it
              </button>
              <button className="w-[170px] text-center p-1 bg-white rounded-md text-lg font-semibold">
                Latest Ideas
              </button>
            </div>
            <div className="h-full"></div>
          </div>
        </div>
      </div>
    </>
  )
}
