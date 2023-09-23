import { footerLinks } from "../constants";
import Logo from "../assets/icons_assets/little_logo.svg";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-yellow-500">
      <div className="text-center grid grid-cols-4 py-24 max-md:grid-cols-1 max-w-[1440px] m-auto">
        <div className="px-5">
          <img src={Logo} alt="logo" className="m-auto w-full pl-5 " />
        </div>

        <div className="max-md:p-16">
          <h1 className="text-3xl font-semibold pb-5 font-mono">
            {footerLinks[0].title}
          </h1>
          <ul>
            {footerLinks[0].links.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" leading-10 text-lg hover:underline  hover:scale-110 transition-all ease-in-out"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-md:pb-16">
          <h1 className="text-3xl font-semibold pb-5 font-mono">
            {footerLinks[1].title}
          </h1>
          <ul>
            {footerLinks[1].links.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" leading-10 text-lg hover:underline  hover:scale-110 transition-all ease-in-out"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <h1 className="text-3xl font-semibold pb-5 font-mono">
            {footerLinks[2].title}
          </h1>
          <ul>
            {footerLinks[2].links.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" leading-10 text-lg hover:underline  hover:scale-110 transition-all ease-in-out"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-5 justify-center pt-5">
            <a href="https://discord.com/" aria-label="Link to Discord">
              <BsDiscord className="text-4xl" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Link to Facebook">
              <BsFacebook className="text-4xl" />
            </a>
            <a href="https://twitter.com/?lang=en" aria-label="Link to Twitter">
              <AiFillTwitterCircle className="text-4xl" />
            </a>
            <a href="https://www.whatsapp.com/" aria-label="Link to Whatsapp">
              <IoLogoWhatsapp className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
