import { useState } from 'react';
import './Register.scss';
import login from '../../assets/login.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from 'axios';
import { redirect } from 'react-router-dom';
import Home from '../User/Home';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const submitRegister = () => {
        console.log("Register");
        axios.post('http://localhost:8000/api/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            phone: phone,
            address: address
        })
        .then(response => {
            console.log('Register successful:', response.data);

            navigate('/')
        })
        .catch(error => {
            console.error('There was an error registing in:', error);
        });
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='resgiter-container'>
            <div className='resgiter-image'>
                <img src={login} alt="Login" />
            </div>
            <div className='resgiter-form'>
                <div className='form-header'>
                    <div className='form-title'>
                        <h1>Create your RIMOWA account</h1>
                        <p>If you already have a RIMOWA account, please sign in.
                            We’ll use your existing details for a faster checkout.
                        </p>
                    </div>
                    <div className='form-body'>
                        <div className='input-group'>
                            <label>Name Address</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <div className='password-wrapper'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className='input-group'>
                            <label>Confirm Password</label>
                            <div className='password-wrapper'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <div className='input-group'>
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className='submit-button'>
                            <button
                            onClick={submitRegister}
                            >Create Account</button>
                        </div>
                    </div>
                    <div className='form-footer'>
                        <p><strong>*Mandatory field.</strong></p>
                        <p>Your personal data is processed by RIMOWA as data controller, for your account creation or/and personalized marketing material if consented. For more information, please see our <a href="#">Privacy policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
