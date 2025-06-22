import React from 'react'
function Login() {
  return (
    <div className="bg-green">
    <h1> login page</h1>
    <div>
      <label className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ...' htmlFor=''>Your Email</label>
      <input className='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5' type='email' />
    </div>
    <div>
      <label htmlFor=''>Your Password</label>
      <input type='password' />
    </div>
        
    </div>
  )
}

export default Login