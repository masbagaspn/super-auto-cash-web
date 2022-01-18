import React from 'react';
import './Form.css';
import logo from './Asset/logo.png';

function LoginForm() {
    return (
        <div className='content-container'>
            <img src={logo} alt="" className='logo'/>
            <div className='text-container'>
                <h2>Hello!</h2>
                <p>Welcome! Please fill in with your details.</p>
            </div>
            <form action="https://super-auto-cash-mobile-api.herokuapp.com" className='form'>
                <div className='form-group'>
                    <label htmlFor="username" 
                        className='form-label'>
                            Username
                            <span className='required'>*</span>
                    </label>
                    <input type="text" 
                        id="username" 
                        className="form-control" 
                        minLength={8}
                        aria-describedby='username-control'
                        placeholder='Enter your username'
                        autoComplete="off"
                        required/>
                    <span id="username-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                    <label htmlFor="password"
                        className='form-label'>
                            Password
                            <span className='required'>*</span>
                    </label>
                    <input type="text" 
                        id="password" 
                        className="form-control" 
                        minLength={8}
                        aria-describedby='password-control'
                        placeholder='Enter your password'
                        autoComplete="off"
                        required/>
                    <span id="password-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                </div>
                <button className='btn-submit'
                    type='submit'>
                    Register
                </button>
                <span className='anchor-form'>Already have an account?&nbsp; <a href="#blank">Login here!</a></span>
            </form>
        </div>
    )
}

export default LoginForm;
