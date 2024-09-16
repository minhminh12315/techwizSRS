import React from 'react';
import { logo } from '../../assets/index';
import Button from '../Button/Button';
import { IoPersonOutline } from 'react-icons/io5';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiLock } from 'react-icons/ci';
import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-menu-icon'>
        <HiBars3CenterLeft size={50}/>
      </div>
      <div className='header-logo'>
        <img src={logo} alt="logo-home" />
      </div>
      <div className='header-nav'>
        <ul className='nav-list'>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
          <li className='nav-item'>Appointments</li>
        </ul>
      </div>
      <div className='header-actions'>
        <Button icon={IoPersonOutline} color="black" background= '#0E82FD' hoverBackground = 'white' hoverColor= 'white'>Register</Button>
        <Button icon={CiLock} color= 'white' border= '1px solid #0E82FD' hoverColor= '#0E82FD'>Login</Button>
      </div>
    </div>
  );
}

export default Header;
