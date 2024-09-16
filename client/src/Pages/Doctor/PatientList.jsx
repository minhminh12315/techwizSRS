import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
const PatientList = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    console.log(user);

    const fetchPatientList = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/patientList");
        const data = await response.json();
        console.log("Fetched data:", data); // Log dữ liệu từ API để kiểm tra

        if (data.data) {
          // Lọc danh sách dựa trên doctor_id
          const filteredAppointments = data.data.filter(
            (appointment) => appointment.doctor_id === user.id
          );
          console.log("Danh sách sau khi lọc:", filteredAppointments); // Log danh sách đã lọc

          // Cập nhật state
          setPatientList(filteredAppointments);
        } else {
          setPatientList([]);
        }
      } catch (error) {
        console.error("Có lỗi xảy ra:", error);
      }
    };

    fetchPatientList();
  }, [user]);

  useEffect(() => {
    if (patientList.length > 0) {
      console.log("Danh sách bệnh nhân:", patientList);
    } else {
      console.log("Danh sách bệnh nhân trống");
    }
  }, [patientList]);
  return (
    <>
      <h1>Patient List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Appointment Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientList.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{new Date(patient.appointment_date).toLocaleDateString()}</td>
              <td>
                <button
                    onClick={() => {
                        navigate('/exportMedicine');
                    }}
                >Export Medicine</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PatientList;
