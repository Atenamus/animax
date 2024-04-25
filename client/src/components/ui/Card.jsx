import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Card({ id, name, episodes, rating }) {
  return (
    <>
      <Link to={`/anime/${id}`}>
        <div className="relative h-[400px] w-[300px] rounded-md">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="mt-2 text-sm text-gray-300">{`Episodes:${episodes}\nRating:${rating}`}</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Watch
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
