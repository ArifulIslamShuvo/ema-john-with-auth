import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='form-container'>
            <form>
                <div>
                    <h2 className='form-title'>This is Login </h2>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </div>
                <p>
                    New to Ema-Joha? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;