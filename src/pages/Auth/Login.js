import React from 'react'
function Login() {
  return (
    <div >
    <h1 className='text-red-500'> login page</h1>
    <div>
      <label  htmlFor=''>Your Email</label>
      <input  type='email' />
    </div>
    <div>
      <label htmlFor=''>Your Password</label>
      <input type='password' />
    </div>
        
    </div>
  )
}

export default Login