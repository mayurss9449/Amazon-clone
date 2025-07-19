import React, {useState} from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
       <img className='login-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />

        <div className='login-container'>
        <h1>Sign in</h1>

        <form>
            <h5>Email or mobile phone number </h5>
            <input type="text" />

            <h5>Password</h5>
            <input type="password"  />

            <button className='login-signin-button'>Sing in</button>

        </form>

        <p>By signing-in you agree to the AMAZON FAKE CLONE condition of use</p>

        <button className='ligin-create-account'>Create your Amazon Account</button>
        </div>


    </div>

    
  )
}

export default Login
