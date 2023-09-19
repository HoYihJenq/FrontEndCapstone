import Food from "../assets/icons_assets/restaurant.jpg";

const Hero = () => {
  return (
    <section className=" bg-violet-300 min-h-screen grid grid-cols-2">
      <div className="py-20 px-20">
        <h1 className=" text-9xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-violet-900">
          Little Lemon
        </h1>
        <h3 className=" text-3xl font-bold my-8">Chicago</h3>
        <p className="text-xl my-10">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. You will surely love it here.
        </p>
        <a href="/booking">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Reserve a table
          </button>
        </a>
      </div>
      <div className="flex flex-col gap-10 rounded-full justify-center w-11/12">
        <img
          src={Food}
          alt="hero-main-image"
          className=" h-96 rounded-xl rotate-6"
        />
      </div>
    </section>
  );
};

export default Hero;
