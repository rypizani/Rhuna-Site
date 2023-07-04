// import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HeaderStyle, Img } from "./HeaderStyles";
import { elementHider, HeaderHider } from "./elementHider";
import imagem from "./../../images/Logo Original 2.png"
/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

const Header = () => {
  return (
    <HeaderHider>
      <header className="header-wrapper">
        <HeaderStyle>

          <Link to="/">
          <Img src={imagem}/>
          </Link>
          
          <Navbar />
        </HeaderStyle>
      </header>
    </HeaderHider>
  );
};

export { Header };
