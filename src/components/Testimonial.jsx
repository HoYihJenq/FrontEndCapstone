import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
  return (
    <section className="py-10">
      <h1 className="text-center">Testimonials</h1>
      <div className="flex justify-around">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonial;
