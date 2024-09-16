import React from 'react';
import { logo } from '../../assets/index';
import Button from '../Button/Button';
import { IoPersonOutline } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';
import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
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
        <Button icon={IoPersonOutline} background="#007bff" hoverBackground="white" color="black">Register</Button>
        <Button icon={CiLock} background="#007bff" hoverBackground="white" color="white" hoverColor="white">Login</Button>
      </div>
    </div>
  );
}

export default Header;
