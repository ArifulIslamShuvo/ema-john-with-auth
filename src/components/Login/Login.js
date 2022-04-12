import React, {useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      let location = useLocation();
      const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
  
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if(user){
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleUserSignIn}>
                <div>
                    <h2 className='form-title'>Login </h2>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
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