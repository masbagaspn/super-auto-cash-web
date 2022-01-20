import React, { useState } from 'react';
import './Form.css';
import logo from './Asset/logo.png';
import LogoRequest from '../features/api/request/LoginRequest'
import LoginRequest from '../features/api/request/LoginRequest';

function LoginForm(props) {

    const md5 = require('md5');

    const [detailUser, setDetailUser] = useState({username: "", password: ""});
    const {baseUrl} = props;
    
    const request = new LoginRequest("", detailUser.username, md5(detailUser.password));

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch({baseUrl} + '/login', request)
        .then(res => {
            console.log(res.json())
        })
        .catch(err => {
            console.err(err);
        });
    }

    return (
        <div className='content-container'>
            <img src={logo} alt="" className='logo'/>
            <div className='text-container'>
                <h2>Hello!</h2>
                <p>Welcome! Please fill in with your details.</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username" className='form-label'>Username<span className='required'>*</span></label>
                    <input type="text" 
                        id="username"
                        name='username'
                        className="form-control" 
                        minLength={8}
                        aria-describedby='username-control'
                        placeholder='Enter your username'
                        autoComplete="off"
                        required
                        onChange={e => setDetailUser({...detailUser, username: e.target.value})}
                        value={detailUser.username}/>
                    <span id="username-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                    <label htmlFor="password" className='form-label'>Password<span className='required'>*</span></label>
                    <input type="password" 
                        id="password"
                        name='password'
                        className="form-control" 
                        minLength={8}
                        aria-describedby='password-control'
                        placeholder='Enter your password'
                        autoComplete="off"
                        required
                        onChange={e => setDetailUser({...detailUser, password: e.target.value})}
                        value={detailUser.password}/>
                    <span id="password-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                </div>
                <button className='btn-submit'
                    type='submit'>
                    Sign in
                </button>
                <span className='anchor-form'>Don't have an account yet?&nbsp;<a href="#blank">Login here!</a></span>
            </form>
        </div>
    )
} 

export default LoginForm;
