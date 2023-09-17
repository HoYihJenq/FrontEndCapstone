import HighlightCards from "./HighlightCards";

const Highlights = () => {
  return (
    <section className=" bg-blue-300">
      <div className=" flex justify-around">
        <h1>This weeks specials!</h1>
        <button className=" bg-red-300">Online Menu</button>
      </div>

      <div className="flex justify-around">
        <HighlightCards />
        <HighlightCards />
        <HighlightCards />
      </div>
    </section>
  );
};

export default Highlights;
