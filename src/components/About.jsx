const About = () => {
  return (
    <section className="  p-20">
      <h1 className="text-center">About</h1>
      <div className="container grid grid-cols-2 gap-5">
        <div className=" bg-violet-300 ">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our commitment to
            quality ingredients, exceptional service, and a cozy atmosphere
            makes dining at Little Lemon a memorable experience. Join us for a
            culinary journey that brings the flavors of the Mediterranean to
            your table.
          </p>
        </div>

        <div className=" bg-blue-300">
          <img src="/" alt="adrian" />
          <img src="/" alt="mario" />
        </div>
      </div>
    </section>
  );
};

export default About;
