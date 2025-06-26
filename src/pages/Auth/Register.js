import React from 'react'

function Register() {
  return (
    
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-9'>
        <h2 className='text-lg font-bold mb-4'>Register</h2>
        <form>
        <div className='mb-64'>
          <label htmlFor='username' className='block text-gray-700'>User Name</label> <br></br>
          <input type='name' placeholder='Enter user name' className='w-full px-3 py-2 border'/>
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label><br></br>
          <input type='email' placeholder='Enter Email' className='block text-gray-700'/>
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label><br></br>
          <input type='password' placeholder='Enter Password' className='block text-gray-700'/>
        </div>
        <button className='w-full bg-green-600 text-white py-2'> Submit</button>
      </form>
      <div className='text-center'>
        <span>Already have an Account</span>
        <a href='/register'>Login</a>
      </div>
      </div> 
    </div>
  )
}

export default Register