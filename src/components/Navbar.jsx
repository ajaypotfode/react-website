import React, { useRef} from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#footer">footer</a>
        </nav>
        <div className="icons">
          <div
           className="fas fa-bars"
           id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
