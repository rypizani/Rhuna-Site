import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  // for open/close mobile menu
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    // return burgerOpen;
  };

  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/" onClick={toggleBurger}>
          Home
        </Link>
        <Link to="/service" onClick={toggleBurger}>
          Produtos
        </Link>
        <Link to="/FAQ" onClick={toggleBurger}>
          FAQ
        </Link>
        <Link to="/about" onClick={toggleBurger}>
          Sobre Nós
        </Link>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={toggleBurger}>
          <BurgerMenu />
        </div>
      </MobileView>

      <style jsx>
        {`
          @media (max-width: 550px) {
            .navbar-wrapper > div > a {
              display: ${burgerOpen ? "inline" : "none"};
              // color: red;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
