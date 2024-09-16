import React, { useContext } from "react";
import { logo } from "../../assets/index";
import Button from "../Button/Button";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import "./Header.scss";
import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="header-container">
      <div className="header-logo" onClick={() => navigate('/')}>
        <img src={logo} alt="logo-home" />
      </div>
      <div className="header-nav">
        <ul className="nav-list gap-5">
          <li className="nav-item" onClick={() => navigate('/about')}>
            <h4>About</h4>
          </li>
          <li className="nav-item" onClick={() => navigate('/contact')}>
            <h4>Contact</h4>
          </li>
          <li className="nav-item" onClick={() => navigate('/appointment')}>
            <h4>Appointments</h4>
          </li>
        </ul>
      </div>
      <div className="header-actions">
        {user === null ? (
          <>
            <Button
              icon={IoPersonOutline}
              color="black"
              background="#0E82FD"
              hoverBackground="white"
              hoverColor="white"
              onClick={() => navigate("/Register")}
            >
              Register
            </Button>
            <Button
              icon={CiLock}
              background="#007bff"
              hoverBackground="white"
              color="black"
              hoverColor="white"
              onClick={() => navigate("/Login")}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <Button
              icon={IoPersonOutline}
              background="#007bff"
              hoverBackground="white"
              color="black"
              onClick={() => navigate("/patientList")}
            >
              Patient
            </Button>
            <Button
              icon={IoPersonOutline}
              background="#007bff"
              hoverBackground="white"
              color="black"
              onClick={() => navigate("/setting")}
            >
              Profile
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
