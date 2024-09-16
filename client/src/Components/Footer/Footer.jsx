import React from 'react'
import { logo } from '../../assets/index';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='mt-5 mb-5'>
            <div className='container'>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                    <div className="col">
                        <Link to="/home">
                            <img src={logo} alt="" width={200} />
                        </Link>
                    </div>
                    <div className="col">
                        <h4>Social Media</h4>
                        <ul className='d-flex flex-column gap-3 justify-content-center align-items-start mt-4'>
                            <li>
                                <Link to="#" className='d-flex gap-2 align-items-center'>
                                    <i class="fa-brands fa-square-facebook fa-xl" style={{ color: '#3b5998' }}></i>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='d-flex gap-2 align-items-center'>
                                    <i class="fa-brands fa-square-x-twitter fa-xl" style={{ color: '#333' }}></i>
                                    X-Twitter
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='d-flex gap-2 align-items-center'>
                                    <i class="fa-brands fa-youtube fa-xl" style={{ color: '#ff0000' }}></i>
                                    Youtube
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Help & Support</h4>
                        <ul className='d-flex flex-column gap-3 justify-content-center align-items-start mt-4'>
                            <li>
                                <Link to="#">FAQ</Link>
                            </li>
                            <li>
                                <Link to="#">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer