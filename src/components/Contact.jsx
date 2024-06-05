import React from "react";
// import Swal from "sweetalert2"; 

const Contact = () => {

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/place/Pimpri-Chinchwad,+Maharashtra/@18.6406772,73.7097414,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b8377fbdeab3:0x2c4265dab1a7a0f8!8m2!3d18.6297811!4d73.7997094!16zL20vMDU3cjZj?entry=ttu"
            loading="lazy"
          ></iframe>

          <form action="submit" >
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="text" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn border-warning text-light display-2"/>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
