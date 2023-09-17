import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className=" text-center  bg-green-400 p-20">
      <div className="flex justify-around">
        {footerLinks.map((footerLink, index) => {
          return <h1 key={index}>{footerLink.title}</h1>;
        })}
      </div>

      <div className="flex justify-around mt-5">
        {footerLinks.map((footerLink, index) => {
          return (
            <ul key={index}>
              {footerLink.links.map((link, index) => {
                return <li key={index}>{link.name}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
