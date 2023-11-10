import React from "react";

import Logo from "../assets/logo.png";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="max-w-xs" src={Logo} alt="" />
          </a>
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-lg">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
