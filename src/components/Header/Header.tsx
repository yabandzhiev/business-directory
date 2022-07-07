import logo from "../../assets/devOceanLogo.png";

import "./Headers.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
