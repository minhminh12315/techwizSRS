import { useState } from 'react';
import './Register.scss';
import login from '../../assets/login.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="email"
                            />
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <div className='password-wrapper'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
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
                            />
                        </div>
                        <div className='input-group'>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                            />
                        </div>
                        <div className='input-group consent-group'>
                            <input
                                type="checkbox"
                                name="consent"
                                id="consent-checkbox"
                            />
                            <label htmlFor="consent-checkbox">
                                I consent to RIMOWA processing my personal data in order to send me personalized marketing material and to share my personal data with RIMOWA’s marketing partners in accordance with the consent form and the privacy policy.
                            </label>
                        </div>
                        <div className='submit-button'>
                            <button>Create Account</button>
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
