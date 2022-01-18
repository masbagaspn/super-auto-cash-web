import React from 'react';
import './Form.css';
import logo from './Asset/logo.png';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                username: '',
                password: ''
            },
            submit: ''
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.md5 = require('md5')
      }
      handleUsername(event) {
        this.setState({
          input: {
              username: event.target.value,
              password: this.state.input.password
          }
        });
      }
      handlePassword(event) {
        this.setState({
          input: {
              username: this.state.input.username,
              password: event.target.value
          }
        });
      }
      handleSubmit(event) {
        event.preventDefault()
        let hashPassword = this.md5(this.state.input.password)
        let request = {
            token: "",
            data: {
                username: this.state.input.username,
                password: hashPassword
            }
        }
        console.log("REQUEST : ", request)
        fetch(this.props.baseUrl + "/login", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify(request)
        })
        .then(response => {
            console.log(response.json())
        })
        .catch(err => {
            console.log(err)
        })
      }
    render() {
        return (
            <div className='content-container'>
                <img src={logo} alt="" className='logo'/>
                <div className='text-container'>
                    <h2>Hello!</h2>
                    <p>Welcome! Please fill in with your details.</p>
                </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username" className='form-label'>Username<span className='required'>*</span></label>
                        <input type="text" 
                            id="username" 
                            className="form-control" 
                            minLength={8}
                            aria-describedby='username-control'
                            placeholder='Enter your username'
                            autoComplete="off"
                            onChange={this.handleUsername}
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
                            onChange={this.handlePassword}
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
                    <span className='anchor-form'>Don't have an account yet?&nbsp;<a href="#blank">Login here!</a></span>
                </form>
            </div>
        )
    } 
}

export default LoginForm;
