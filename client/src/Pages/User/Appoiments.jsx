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
      <div className="container">
        <h1 className="text-center">Appointments</h1>
        <h3>Make an Appointment</h3>
        <form onSubmit={handleSubmit} className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctors">Doctors:</label>
                <select
                  className="form-control"
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
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary mt-4"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appoiments;
