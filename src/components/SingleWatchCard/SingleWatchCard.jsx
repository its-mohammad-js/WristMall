function SingleWatchCard({ name, thumbnail, summaryDetails }) {
  return (
    <div
      id="card-wrapper"
      className="w-44 flex flex-col items-center bg-Buff-300 bg-opacity-50 backdrop-blur-sm rounded-md group hover:ring-2 ring-EerieBlack-100"
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
      <div className="w-full px-2 py-1">
        <p className="text-sm text-center font-semibold group-hover:text-white-100 transition-all">
          {name}
        </p>
      </div>
    </div>
  );
}

export default SingleWatchCard;
