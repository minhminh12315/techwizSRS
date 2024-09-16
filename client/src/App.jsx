import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, Header } from "./index.js";
import Home from "./Pages/User/Home.jsx";
import "./assets/css/minh.css";
import "./assets/css/an.css";
import Appoiments from "./Pages/User/Appoiments.jsx";
import Contact from "./Pages/User/Contact.jsx";
import UserContext from "./Context/UserContext.js";
import Footer from "./Components/Footer/Footer.jsx";
import PatientList from "./Pages/Doctor/PatientList.jsx";
import ExportMedicine from "./Pages/Doctor/ExportMedicine.jsx";
function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Có lỗi xảy ra:", error));
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
        {user ? (
            user.role === "doctor" ? (
              <>
            <Route path="/exportMedicine" element={<ExportMedicine />} />
            <Route path="/patientList" element={<PatientList />} />
              </>
            ) : null
          ) : (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </>
          )}

          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appoiments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
