import TestimonialCards from "./TestimonialCards";
import img1 from "../assets/testimonial_images/img1.png";
import img2 from "../assets/testimonial_images/img2.png";
import img3 from "../assets/testimonial_images/img3.png";
import img4 from "../assets/testimonial_images/img4.png";

const Testimonial = () => {
  return (
    <section className="flex flex-col justify-center items-center px-10 bg-violet-300 h-auto pb-32 w-full">
      <h1 className="text-center text-8xl py-20 text-violet-900 font-bold underline max-md:text-5xl hover:scale-110 transition-all ease-in-out duration-300 font-serif">
        Testimonials
      </h1>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 pt-10 max-md:auto-rows-[400px] max-md:auto-cols-[200px] font-mono">
        <TestimonialCards
          images={img1}
          name={"GandalfTheGrey"}
          time={"12:34 PM"}
        >
          Little Lemon's delightful ambiance and delectable dishes left me
          craving for more. The flavors are simply exceptional; this restaurant
          has truly mastered the art of culinary perfection!
        </TestimonialCards>
        <TestimonialCards
          images={img2}
          name={"PixelMaster42 "}
          time={"3:16 PM"}
        >
          Little Lemon offers a delightful fusion of flavors that tantalize the
          taste buds. Exceptional service and a cozy atmosphere make it my top
          choice for a memorable dining experience.
        </TestimonialCards>
        <TestimonialCards
          images={img3}
          name={"DungeonDiver99 "}
          time={"5:45 PM"}
        >
          Little Lemon's menu is a masterpiece of creativity and taste. Every
          bite is an explosion of flavors that lingers in your memory. I can't
          get enough of their incredible cuisine.
        </TestimonialCards>
        <TestimonialCards images={img2} name={"CyberWizardX "} time={"8:02 AM"}>
          I've dined at Little Lemon multiple times, and each visit surpasses
          the last. The impeccable service, cozy ambiance, and mouthwatering
          dishes make it a hidden gem in our city.
        </TestimonialCards>
        <TestimonialCards
          images={img1}
          name={"MechaPilot9000 "}
          time={"10:57 AM"}
        >
          Little Lemon is a culinary gem! The presentation, taste, and service
          are top-notch. It's the perfect place for a romantic dinner or a
          special celebration. Highly recommended!!
        </TestimonialCards>
        <TestimonialCards
          images={img4}
          name={"SorceressNova "}
          time={"9:28 PM"}
        >
          Little Lemon is a culinary treasure trove. The diverse menu caters to
          all tastes, and the impeccable service ensures a memorable dining
          experience. I keep coming back for more!
        </TestimonialCards>
      </div>
    </section>
  );
};

export default Testimonial;
