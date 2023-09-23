import { ImArrowRight2 } from "react-icons/im";

const HighlightCards = ({ cardImage, children }) => {
  return (
    <div className=" m-auto h-full relative max-w-xs bg-white border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:hover:-translate-y-16 max-md:hover:scale-105 transition-all ease-in-out duration-500">
      <a href="#">
        <img className="rounded-t-lg h-60" src={cardImage} alt="card1" />
      </a>

      {children}
      <button
        type="button"
        className=" bottom-2 left-3 absolute hover:scale-105 transition-all ease-in-out text-white bg-gradient-to-br from-orange-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-orange-800 font-medium rounded-lg text-xm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <div className="flex flex-row items-center">
          <span>Read More</span>
          <ImArrowRight2 className=" ml-2" />
        </div>
      </button>
    </div>
  );
};

export default HighlightCards;
