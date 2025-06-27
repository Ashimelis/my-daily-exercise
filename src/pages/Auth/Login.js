
import React from 'react'
function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <form>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label><br></br>
          <input type='email' placeholder='Enter Email' className='w-full px-3 py-2 border'/>
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label><br></br>
          <input type='password' placeholder='Enter Password' className='w-full px-3 py-2 border'/>
        </div>
        <button> Submit</button>
      </form>
      <div>
        <p>Create new Account</p>
        <a href='/login'>Register</a>
      </div>
      </div> 
    </div>
  )
}

export default Login