import TestimonialCards from "./TestimonialCards";
import img1 from "../assets/testimonial_images/img1.png";
import img2 from "../assets/testimonial_images/img2.png";
import img3 from "../assets/testimonial_images/img3.png";
import img4 from "../assets/testimonial_images/img4.png";
import img5 from "../assets/testimonial_images/img5.png";

const Testimonial = () => {
  return (
    <section className="py-10">
      <h1 className="text-center">Testimonials</h1>
      <div className="flex justify-around">
        <TestimonialCards images={img1} />
        <TestimonialCards images={img2} />
        <TestimonialCards images={img3} />
        <TestimonialCards images={img4} />
        <TestimonialCards images={img5} />
      </div>
    </section>
  );
};

export default Testimonial;
