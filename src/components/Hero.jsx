const Hero = () => {
  return (
    <section className=" bg-violet-300 min-h-screen">
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist
      </p>
      <button
        type="button"
        className="bg-blue-300 rounded-full px-4 py-2 hover:bg-blue-400 active:bg-blue-700 focus: outline-none focus:ring focus:ring-blue-500 shadow-xl"
      >
        Reserve a Table
      </button>
      <img src="/" alt="hero-main-image" />
    </section>
  );
};

export default Hero;
