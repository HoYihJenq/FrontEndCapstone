import { useEffect, useState } from "react";
import Logo from "../assets/icons_assets/little_logo.svg";
import Hamburger from "../assets/icons_assets/hamburger.svg";

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleBurger = () => {
    setMenuVisible(!isMenuVisible);
  };

  let meow = 1;
  const handleSize = () => {
    if (window.innerWidth >= 1024 && isMenuVisible) {
      setMenuVisible(false);
      console.log((meow = meow + 1));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isMenuVisible]);

  return (
    <nav
      className={`flex justify-between max-md:items-start items-center px-32 p-5 bg-yellow-500 w-full max-md:px-5 max-md:pt-10`}
    >
      <a href="/">
        <img
          src={Logo}
          alt="little-lemon-logo"
          className={`hover:scale-125 transition-all ease-in-out duration-300 max-md:scale-125 max-md:pl-5`}
        />
      </a>
      <button onClick={handleBurger}>
        <img src={Hamburger} alt="hamburger" className="hidden max-lg:block " />
      </button>
      <ul className=" list-none flex gap-10 text-xl text-violet-900 max-lg:flex-col max-lg:hidden">
        <li className="hover:underline hover:scale-125 transition-all ease-in-out">
          <a href="/">Home</a>
        </li>
        <li className="hover:underline  hover:scale-125 transition-all ease-in-out">
          <a href="#about">About</a>
        </li>
        <li className="hover:underline  hover:scale-125 transition-all ease-in-out">
          <a href="#highlights">Menu</a>
        </li>
        <li className="hover:underline  hover:scale-125 transition-all ease-in-out">
          <a href="/booking">Reservations</a>
        </li>
        <li className="hover:underline  hover:scale-125 transition-all ease-in-out">
          <a href="#highlights">Order Online</a>
        </li>
        <li className="hover:underline  hover:scale-125 transition-all ease-in-out">
          Login
        </li>
      </ul>

      <ul
        className={`rounded-lg list-none flex flex-col justify-center items-center text-xl text-violet-900 absolute top-[97px] right-[1.25rem] text-end py-3 bg-yellow-400 w-40 transition-all ease-in-out duration-300 ${
          isMenuVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <li className=" border-b-2 leading-[3rem] w-[80%] flex justify-center border-slate-200">
          <a href="/">Home</a>
        </li>
        <li className=" border-b-2 leading-[3rem] w-[80%] flex justify-center border-slate-200">
          <a href="#about">About</a>
        </li>
        <li className=" border-b-2 leading-[3rem] w-[80%] flex justify-center border-slate-200">
          <a href="#highlights">Menu</a>
        </li>
        <li className=" border-b-2 leading-[3rem] w-[80%] flex justify-center border-slate-200">
          <a href="/booking">Reservations</a>
        </li>
        <li className=" border-b-2 leading-[3rem] w-[80%] flex justify-center border-slate-200">
          <a href="#highlights">Order Online</a>
        </li>
        <li className=" leading-[3rem] w-[80%] flex justify-center">Login</li>
      </ul>
    </nav>
  );
};

export default Header;
