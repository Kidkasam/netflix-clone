import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState("sign in")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault()

    if(signState === "sign in"){
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "sign up" && (
            <input 
              type="text" 
              placeholder='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          )}
         
          <input 
            type="email" 
            placeholder='email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type='submit'>{signState}</button>

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
