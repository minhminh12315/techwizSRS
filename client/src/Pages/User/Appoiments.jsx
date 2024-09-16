import React, { useState, useEffect } from "react";
import axios from "axios";

const Appoiments = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/docterList")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched:", data);
        setDoctors(data.data);
      })
      .catch((error) => console.error("Có lỗi xảy ra:", error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/appointments", {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        doctor_id: doctor,
      })
      .then((response) => {
        console.log("Appointment created successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the appointment:", error);
      });
  };

  return (
    <>
      <div className="appointment_title_container">
        <div className="d-flex justify-content-center align-items-center flex-column gap-4">
          <div>
            <span className="text-secondary">HOME - </span>
            <span className="text-white">APPOINTMENT</span>
          </div>
          <h1 className="text-center">Appointment</h1>
        </div>
      </div>
      <div className="container form_appointment_container">
        <div className="form_appointment_title">Make an Appointment</div>
        <form onSubmit={handleSubmit} className="container mt-4 form_appointment">
          <div className="row g-3">
            <div className="form-group col-md-4 col-12">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form_control_custom"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4 col-12">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form_control_custom"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4 col-12">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                className="form_control_custom"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                className="form_control_custom"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                className="form_control_custom"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="doctors">Doctors:</label>
              <select
                className="form_control_custom"
                id="doctors"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <button type="submit" className="btn_showTime">SHOW TIME</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appoiments;
