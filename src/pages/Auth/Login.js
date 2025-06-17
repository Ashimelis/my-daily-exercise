import React from 'react'
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div>
        <form>
           <h1> Login</h1>
        <div>
          <input type='email'/>
        <label htmlFor=''>Your Email</label>
        </div>
        <div>
          <input type='password'/>
        <label htmlFor=''>Your Password</label>
        </div>
        <div>
          <div>
            <input type='checkbox' name="id"/>
            <label htmlFor='Remember Me'></label>
          </div>
          <span>Forget Password?</span>
        </div>
        <button type='submit'> Login</button>
        </form>
        <div>
          <span>New Here?<Link to='Register'> create an Account</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login