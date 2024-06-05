import React from "react";
// import Swal from "sweetalert2"; 

const Contact = () => {
  const getEmail=(event)=>{
    
    alert("thank you for, contact with us")
    event.preventDefault();
  }

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120976.60597935974!2d73.7921444!3d18.640695150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717579732387!5m2!1sen!2sin"
            width="600" height="450"
            className="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

          <form action="">
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
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn bg-warning"  />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
