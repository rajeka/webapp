import { Link } from "react-router-dom";
import logo from "../assets/wallet1.jpeg";
const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src={logo}
        alt="logo"
        width={48}
        height={48}
        className="rounded-circle"
      />
    </Link>
  );
};

export default Logo;
