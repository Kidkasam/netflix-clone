import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("sign in")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==="sign up"? <input type="text" placeholder='name'/>:<></>}
         
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>{signState} </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">remember me</label>
            </div>
            <p>need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "sign in" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("sign up")}>Sign up now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("sign in")}>Sign in now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
