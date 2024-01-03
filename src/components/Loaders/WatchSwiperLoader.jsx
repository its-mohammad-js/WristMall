import LoaderSpinner from "./LoaderSpinner";

function WatchSwiperLoader() {
  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[630px] 2xl:max-w-6xl flex items-center justify-center md:justify-start animate-pulse">
      {/* background  */}
      <div className="h-screen w-screen bg-Buff-300 md:w-full md:h-full md:rounded-bl-md absolute z-10"></div>

      {/* product card */}
      <div
        className={`bg-white-90 relative w-11/12 md:w-1/3 md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:backdrop-blur-0 md:mx-4`}
      >
        <div>
          {/* image slider */}
          <>
            <div className="w-11/12 h-44 md:w-60 md:h-56 mx-auto bg-white-100 rounded-md flex items-center justify-center">
              <LoaderSpinner />
            </div>
          </>
          {/* description  */}
          <div className="w-full text-center py-4 px-2 flex flex-col justify-center items-center gap-y-2">
            {/* title */}
            <h2 className="text-lg line-clamp-1 text-center overflow-hidden whitespace-nowrap animate-infinityType">
              Product Loading ...
            </h2>
          </div>
        </div>
      </div>

      {/* details section (desktop vision) */}
      <div
        className={`w-2/3 h-full hidden md:flex  items-center transition-all relative`}
      >
        <>
          <div
            className={`z-20 bg-EerieBlack-600 mt-4 bg-opacity-75 backdrop-blur-md border-[2px] border-white-100 ring-[3px] ring-Buff-400 w-full mx-16 transition-all text-white-100 px-4 py-2 rounded-md`}
          >
            <h2 className="text-center text-xl transition-all">name</h2>

            <p className="line-clamp-4 text-sm mt-1">description</p>

            <div className="my-4">
              <ul className="">
                {/* {topProucts[selectedWatch].summaryDetails.map(
                  (summary, index) => (
                    <li key={index} className="border-b-2 border-white-99 ">
                      {summary}
                    </li>
                  )
                )} */}
                <li className="border-b-2 border-white-99 ">price</li>
              </ul>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default WatchSwiperLoader;
