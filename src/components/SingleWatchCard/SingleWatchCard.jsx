import { FaCartPlus } from "react-icons/fa";

function SingleWatchCard({ name, thumbnail, summaryDetails, price }) {
  return (
    <div
      id="card-wrapper"
      className="w-1/2 sm:w-1/4 h-72 flex flex-col items-center bg-Buff-300 bg-opacity-50 backdrop-blur-sm rounded-md group hover:ring-2 ring-EerieBlack-100"
    >
      {/* product cover */}
      <div className="h-3/4 w-full px-4 py-2 rounded-t-md">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-36 object-contain py-2 group-hover:-translate-y-2 duration-500 ease-in-out"
        />
      </div>
      {/* product details */}
      <div className="w-full px-2 py-1 cursor-pointer">
        <p className="text-sm text-center font-semibold group-hover:text-white-100 transition-all">
          {name}
        </p>
        <p className="text-center group-hover:text-white-90 duration-200">
          {summaryDetails.map((summary, index) => (
            <span key={index} className="text-xs">
              {summary} &nbsp;
            </span>
          ))}
        </p>
        <div className="w-full flex justify-between items-center px-2 py-1">
          <span className="group-hover:text-white-90 group-hover:-translate-y-1 duration-500 ease-in-out">
            ${price}
          </span>

          <button className="p-1.5 rounded-md bg-Buff-200 duration-500">
            <FaCartPlus className="text-EerieBlack-600 text-lg group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleWatchCard;
