import Chef1 from "../assets/icons_assets/Chef1.png";
import Chef2 from "../assets/icons_assets/Chef2.png";
import Chef3 from "../assets/icons_assets/Chef3.png";
import Chef4 from "../assets/icons_assets/Chef4.png";

const About = () => {
  return (
    <section
      id="about"
      className="  w-full max-md:h-[1800px] flex justify-center items-center"
    >
      <div className="max-w-[1280px] min-h-screen grid grid-cols-2 max-md:grid-cols-1 max-md:auto-rows-[800px]">
        <div className="py-20 px-20">
          <h1 className=" transition-all ease-in-out hover:scale-105 text-9xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-violet-900 font-serif">
            Little Lemon
          </h1>
          <h3 className=" text-3xl font-bold my-8 transition-all ease-in-out hover:scale-110 origin-left">
            Chicago
          </h3>
          <p className="text-xl my-10 transition-all ease-in-out hover:scale-105">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our commitment to
            quality ingredients, exceptional service, and a cozy atmosphere
            makes dining at Little Lemon a memorable experience. Join us for a
            culinary journey that brings the flavors of the Mediterranean to
            your table.
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
        {/* Below is for images */}
        <div className="group grid grid-cols-2 gap-3 relative text-center max-md:px-3">
          <div className="absolute text-6xl flex h-full w-full justify-center items-center">
            <h1 className="text-violet-900 invisible group-hover:visible transition-all ease-in-out font-serif">
              Welcome =&#41;
            </h1>
          </div>

          <div className="relative">
            <img
              src={Chef1}
              alt="hero-main-image"
              className=" absolute bottom-0 right-0  h-[65%] max-h-[65%] w-56 rounded-xl shadow-2xl border border-slate-500 group-hover:-rotate-45 group-hover:-translate-y-14 group-hover:-translate-x-52 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="relative">
            <img
              src={Chef2}
              alt="hero-main-image"
              className="absolute bottom-0 h-[65%] max-h-[65%] w-56 rounded-xl  shadow-2xl border-slate-500 group-hover:-translate-y-14 group-hover:translate-x-52 group-hover:rotate-45 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="relative">
            <img
              src={Chef3}
              alt="hero-main-image"
              className="absolute top-0 right-0 h-[65%] max-h-[65%] w-56 rounded-xl shadow-2xl border-slate-500 group-hover:translate-y-14 group-hover:-translate-x-52 group-hover:rotate-45 transition-all ease-in-out duration-700"
            />
          </div>
          <div className="relative">
            <img
              src={Chef4}
              alt="hero-main-image"
              className="absolute top-0 h-[65%]  max-h-[65%] w-56 rounded-xl shadow-2xl border-slate-500 group-hover:translate-y-14 group-hover:translate-x-52 group-hover:-rotate-45 transition-all ease-in-out duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
