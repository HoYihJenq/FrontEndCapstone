import Logo from "../assets/icons_assets/little_logo.svg";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-32 p-5 bg-yellow-500 min-w-full">
      <img src={Logo} alt="little-lemon-logo" />
      <ul className=" list-none flex gap-10 text-xl text-violet-900">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Header;
