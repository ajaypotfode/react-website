import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
        </div>
        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </div>
        <div className="credit">
          created by <span>coder@2023</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
