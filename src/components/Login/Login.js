import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='form-container'>
            <form>
                <div>
                    <h2 className='form-title'>This is Login </h2>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" required/>
                </div>
                <p>
                    New to Ema-Joha? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='horizontal-line'>

                    <hr className="horiz" />
                    or
                    <hr className="horiz" />
                </div>
                <button className='form-google'>
                    <img className='google-img' src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" />
                   <p> Continue with Google</p>
                </button>
            </form>

        </div>
    );
};

export default Login;