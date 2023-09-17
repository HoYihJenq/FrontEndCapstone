const Header = () => {
  return (
    <nav className="flex justify-between px-20 p-3 bg-slate-500">
      <img src="/" alt="little-lemon-logo" className=" span bg-blue-300" />
      <ul className=" list-none flex gap-10 bg-red-400">
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
