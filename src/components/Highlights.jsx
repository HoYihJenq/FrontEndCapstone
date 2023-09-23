import HighlightCards from "./HighlightCards";
import Card1 from "../assets/icons_assets/Card1.png";
import Card2 from "../assets/icons_assets/Card2.png";
import Card3 from "../assets/icons_assets/Card3.png";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className=" flex flex-col justify-center items-center min-h-screen pb-48 w-full "
    >
      <div>
        <div className=" flex flex-row justify-between items-baseline py-20 w-full max-md:flex-col">
          <h1 className="text-6xl font-bold text-orange-600 pb-10 hover:scale-110 transition-all ease-in-out max-md:text-4xl font-serif">
            This weeks specials!
          </h1>
          <button
            type="button"
            className=" hover:scale-105 transition-all ease-in-out text-white bg-gradient-to-br from-orange-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-orange-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Online Menu
          </button>
        </div>

        <div className="grid grid-cols-3 auto-rows-[500px] gap-5 min-h-[500px] max-md:grid-cols-1 max-md:gap-10">
          <HighlightCards cardImage={Card1}>
            <a href="#" className=" flex justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-5">
                Lemon Dessert
              </h5>
              <h5 className="mb-2 text-2xl p-5 text-orange-400 font-medium">
                <span className="font-bold">$</span>
                19.89
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-5">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </HighlightCards>

          <HighlightCards cardImage={Card2}>
            <a href="#" className=" flex justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-5">
                Greek Salad
              </h5>
              <h5 className="mb-2 text-2xl p-5 text-orange-400 font-medium">
                <span className="font-bold">$</span>
                20.99
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-5">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </HighlightCards>

          <HighlightCards cardImage={Card3}>
            <a href="#" className=" flex justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-5">
                Bruchetta
              </h5>
              <h5 className="mb-2 text-2xl p-5 text-orange-400 font-medium">
                <span className="font-bold">$</span>
                9.99
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-5">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </HighlightCards>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
