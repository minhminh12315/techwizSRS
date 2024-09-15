import { useState } from 'react';
import './Login.scss';
import login from '../../assets/login.jpg';
import tick from '../../assets/tick.png';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login-container'>
            <div className='login-image'>
                <img src={login} alt="Login" />
            </div>
            <div className='login-form'>
                <div className='form-header'>
                    <div className='form-title'>
                        <h1>Sign in to your account</h1>
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
                            <a href="#">Forgot your password?</a>
                        </div>
                        <div className='submit-button'>
                            <button>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className='signup-container'>
                    <div className='signup-title'>
                        <h1>Don't have an account?</h1>
                        <p>Get more out of your experience by signing up to:</p>
                    </div>
                    <div className='signup-benefits'>
                        <div className='benefit-item'>
                            <img src={tick} alt="tick" />
                            <p>Manage your orders and returns</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="tick" />
                            <p>Easily enjoy your lifetime guarantee</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="tick" />
                            <p>Create a wish list</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="tick" />
                            <p>Enjoy personalised recommendations</p>
                        </div>
                        <div className='create-account-button'>
                            <Link to="/Register">
                                <button>
                                    Create Account
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
