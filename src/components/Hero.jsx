import Food from "../assets/icons_assets/restaurant.jpg";
import Restaurant1 from "../assets/icons_assets/restaurant1.png";
import Restaurant2 from "../assets/icons_assets/restaurant2.png";
import Restaurant3 from "../assets/icons_assets/restaurant3.png";
import Restaurant4 from "../assets/icons_assets/restaurant4.png";

const Hero = () => {
  return (
    <section className=" bg-violet-300 w-full max-sm:h-[800px] h-screen">
      <div className="max-w-[1280px] min-h-full grid grid-cols-2 m-auto max-md:grid-cols-1 max-md:auto-rows-[500px] max-sm:min-h-full">
        <div className="py-20 px-20">
          <h1 className=" transition-all ease-in-out hover:scale-105 text-9xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-violet-900 font-serif">
            Little Lemon
          </h1>
          <h3 className=" text-3xl font-bold my-8 transition-all ease-in-out hover:scale-110 origin-left">
            Chicago
          </h3>

          <p className="text-xl my-10 transition-all ease-in-out hover:scale-105">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. You will surely love
            it here.
          </p>
          <a href="/booking">
            <button
              type="button"
              className=" hover:scale-105 transition-all ease-in-out text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
            >
              Reserve a table
            </button>
          </a>
        </div>

        <div className="flex items-center justify-center max-sm:hidden">
          <img
            src={Food}
            alt="hero-main-image"
            className=" w-[30%]  max-w-[530px] absolute rounded-xl  origin-bottom-right -rotate-[24deg] shadow-2xl border border-slate-500 hover:scale-105 transition-all ease-in-out"
          />
          <img
            src={Restaurant1}
            alt="hero-main-image"
            className="w-[30%]  max-w-[530px] absolute   rounded-xl  origin-bottom-right -rotate-12 shadow-2xl border-slate-500 hover:scale-105 transition-all ease-in-out"
          />
          <img
            src={Restaurant2}
            alt="hero-main-image"
            className="w-[30%]  max-w-[530px] absolute   rounded-xl  origin-bottom-right shadow-2xl border-slate-500 hover:scale-105 transition-all ease-in-out"
          />
          <img
            src={Restaurant3}
            alt="hero-main-image"
            className="w-[30%]  max-w-[530px] absolute   rounded-xl  origin-bottom-right rotate-12 shadow-2xl border-slate-500 hover:scale-105 transition-all ease-in-out"
          />
          <img
            src={Restaurant4}
            alt="hero-main-image"
            className="w-[30%] max-w-[530px] absolute   rounded-xl  origin-bottom-right rotate-[24deg] shadow-2xl border-slate-500 hover:scale-105 transition-all ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
