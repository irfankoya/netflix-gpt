import React from "react";
import logo from "../assets/pngegg.png";
const Header = () => {
  return (
    <div className="w-full max-w-[200px] mb-10">
      <img className="w-full" src={logo} alt="netfilx Logo" />
    </div>
  );
};

export default Header;
