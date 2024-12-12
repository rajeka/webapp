import logo from "../assets/wallet1.jpeg";
const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img
        src={logo}
        alt="logo"
        width={48}
        height={48}
        className="rounded-circle"
      />
    </a>
  );
};

export default Logo;
