import React from 'react';
import './Home.scss';
import { bg1, derm } from '../../assets/index.js';

const Home = () => {
  return (
    <div className='Home-container'>
      <img src={bg1} alt="Background" />
      <div className='content-container'>
        <img src={derm} alt="Derm" />
        <h3>MODERN HEALTHCARE</h3>
        <h2>Make an Appointment</h2>
        <button>BOOK APPOINTMENT</button>
      </div>
    </div>
  );
}

export default Home;
