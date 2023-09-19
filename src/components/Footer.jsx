import { footerLinks } from "../constants";
import Logo from "../assets/icons_assets/little_logo.svg";
const Footer = () => {
  return (
    <footer className=" bg-yellow-500 text-center grid grid-cols-4 py-24 ">
      <img src={Logo} alt="logo" className="m-auto w-[200%] pl-5" />

      <div className=" col-span-3 ">
        <div className="flex justify-around text-3xl font-serif ">
          {footerLinks.map((footerLink, index) => {
            return <h1 key={index}>{footerLink.title}</h1>;
          })}
        </div>

        <div className="flex justify-around mt-5 text-violet-950 text-lg">
          {footerLinks.map((footerLink, index) => {
            return (
              <ul key={index}>
                {footerLink.links.map((link, index) => {
                  return (
                    <li className="leading-10" key={index}>
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
