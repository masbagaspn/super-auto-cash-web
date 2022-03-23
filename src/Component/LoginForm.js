import React from 'react';
import './Form.css';
import logo from './Asset/logo.png';
import { useState } from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl, post, resetPayload, selectLoading, selectPayload, updateToken } from '../features/api/Api';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../app/useLocalStorage';

function LoginForm()  {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loading = useSelector(selectLoading)
    const payload = useSelector(selectPayload)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const [user, setUser] = useLocalStorage("user", "")

    const handleOnChangeUsername = (e) => setUsername(e.target.value)
    const handleOnChangePassword = (e) => setPassword(e.target.value)
    const handleOnSubmit = (e) => {
        e.preventDefault()

        let hashPassword = require("md5")(password)
        dispatch(post({
            endpoint: apiUrl.userLogin,
            data: {
                username: username,
                password: hashPassword
            }
        })).then(res => {
            let response = res.payload
            if (response.success === true) {
                let userLoggedIn = response.data
                setUser(userLoggedIn)
                if (userLoggedIn.roleId === 1) navigate("/user")
                else navigate("/merchant")
            } else {
                alert(response.errorMessage)
            }
        })
    }

    let title
    if (loading) {
        title = <div className='text-container'><p>Loading...</p></div>
    } else {
        title = <div className='text-container'>
            <h2>Hello!</h2>
            <p>Welcome! Please fill in with your details.</p>
        </div>
    }

    return (
        <div className='content-container'>
            <img src={logo} alt="" className='logo'/>
            {title}
            <form className='form' onSubmit={handleOnSubmit}>
                <div className='form-group'>
                    <label htmlFor="username" className='form-label'>Username<span className='required'>*</span></label>
                    <input type="text" 
                        id="username" 
                        className="form-control" 
                        minLength={8}
                        aria-describedby='username-control'
                        placeholder='Enter your username'
                        autoComplete="off"
                        value={username}
                        onChange={handleOnChangeUsername}
                        required/>
                    <span id="username-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                    <label htmlFor="password" className='form-label'>Password<span className='required'>*</span></label>
                    <input type="password" 
                        id="password" 
                        className="form-control" 
                        minLength={8}
                        aria-describedby='password-control'
                        placeholder='Enter your password'
                        autoComplete="off"
                        value={password}
                        onChange={handleOnChangePassword}
                        required/>
                    <span id="password-control" 
                        aria-live="assertive" 
                        className="validation-message">
                    </span>
                </div>
                <button className='btn-submit'
                    type='submit'>
                    Sign in
                </button>
                <span className='anchor-form'>Don't have an account yet?&nbsp;<Link to="/register">Register Here!</Link></span>
            </form>
        </div>
    )
} 

export default LoginForm;
