export const Box = () => {
  return (
    <>
      <div className="bg-gray-50 flex h-screen justify-center">
        <div className="flex bg-gray-50 border-l-2 justify-center flex-wrap w-2/5 my-10">
        <p className="font-semibold text-3xl text-blue-500 mt-10">
          Timeline with Tailwindcss
        </p>
          <div className="text-3xl font-semibold border-b-2 bg-blue-800 pb-2 mr-24 w-full ml-10 rounded-md h-32 -mb-12 relative">
            <div className="absolute bg-blue-800 w-5 h-5 rounded-full -left-12 top-12"></div>
            <div className="absolute bg-blue-800 w-12 h-1  -left-12 top-14"></div>
            <p className="text-sm text-white m-3 opacity-70">Day 1</p>
            <p className="text-xl text-white m-3">
              Oriented and Briefing on Uniliver basics
            </p>
            <p className="text-sm text-white opacity-70 m-3">Classrom</p>
          </div>
          <div className="text-3xl font-semibold border-b-2 bg-red-800 pb-2 mr-24 w-full ml-10 rounded-md h-32 -mb-12 relative">
          <div className="absolute bg-red-800 w-5 h-5 rounded-full -left-12 top-12"></div>
            <div className="absolute bg-red-800 w-12 h-1  -left-12 top-14"></div>
            <p className="text-sm text-white m-3 opacity-70">Day 1</p>
            <p className="text-xl text-white m-3">
              Oriented and Briefing on Uniliver basics
            </p>
            <p className="text-sm text-white opacity-70 m-3">Classrom</p>
          </div>
          <div className="text-3xl font-semibold border-b-2 bg-green-800 pb-2 mr-24 w-full ml-10 rounded-md h-32 relative">
          <div className="absolute bg-green-800 w-5 h-5 rounded-full -left-12 top-12"></div>
            <div className="absolute bg-green-800 w-12 h-1  -left-12 top-14"></div>
            <p className="text-sm text-white m-3 opacity-70">Day 1</p>
            <p className="text-xl text-white m-3">
              Oriented and Briefing on Uniliver basics
            </p>
            <p className="text-sm text-white opacity-70 m-3">Classrom</p>
          </div>
        </div>
      </div>
    </>
  );
};
