import { Link } from "react-router-dom";
import logo from "../../assets/devOceanLogo.png";

import "./Headers.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
