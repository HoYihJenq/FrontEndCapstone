const TestimonialCards = ({ images, name, time, children }) => {
  return (
    <div className=" shadow-xl w-96 p-10 bg-white rounded-2xl max-md:w-full hover:scale-110 transition-all ease-in-out duration-300">
      <div className="flex mb-5">
        <img
          src={images}
          alt="testimonial-image"
          className="rounded-full h-14"
        />
        <div className="flex flex-col pl-3">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className=" text-slate-500">{time}</p>
        </div>
      </div>

      <p className=" indent-8">{children}</p>
      <a href="/" className="text-blue-700 text-xs">
        View all reviews
      </a>
    </div>
  );
};

export default TestimonialCards;
