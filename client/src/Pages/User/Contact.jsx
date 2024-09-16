import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  // State to hold form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/feedback", {
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
      .then((response) => {
        console.log("Feedback submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the feedback:", error);
      });

  };

  return (
    <>
      <div className="main_title_section_container">
        <div className="d-flex justify-content-center align-items-center flex-column gap-4">
          <div>
            <span className="text-secondary">HOME - </span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-center">Contact</h1>
        </div>
      </div>
      <div className="container form_contactUs_container">
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-center">Contact Form</h1>
          <p>
            We encourage your feedback, please feel free to send us a message using
            the following contact form.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="row g-4">
            <div className="form-group col-lg-4 col-12">
              <input
                type="text"
                className="form_control_custom"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <input
                type="email"
                className="form_control_custom"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <input
                type="tel"
                className="form_control_custom"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Your Phone Number"
              />
            </div>
            <div className="form-group col-12">
              <textarea
                className="form_control_custom"
                id="message"
                name="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <button type="submit" className="btn_secondary_custom mt-4">SEND</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
