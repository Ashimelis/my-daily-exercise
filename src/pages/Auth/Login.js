import React from 'react'
function Login() {
  return (
    <div className='bg-yellow-300'>
    <h1 className='text-red-500'> login page</h1>
    <div>
      <label  htmlFor='' className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'>Your Email</label>
      <input className='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' type='email' />
      <button >
  Hover me
</button>
    </div>
    <div>
      <label htmlFor=''>Your Password</label>
      <input type='password' />
    </div>
        
    </div>
  )
}

export default Login