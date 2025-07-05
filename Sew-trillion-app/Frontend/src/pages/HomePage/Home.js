import React from 'react'
import image from "../../Assets/istockphoto2.webp"
import image2 from "../../Assets/istockphoto3.webp"

function Home() {
  return (
    <div>
    
    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 '>
      <img className='block mx-auto h-24 rounded-sm sm:mx-0 sm:flex-shrink-0' src={image} alt='welcome to Sew-trillion'/> 
    </div>
    <div>
       <h1 className='bg-slate-400 relative text-yellow-300'> Welcome to Sew-trillion</h1>
        <h3 className='bg-slate-400 relative text-white'> We Build and Grow Together</h3>
    </div>
     
        <h1 className='bg-slate-400 text-yellow-400'> Invest in your future</h1>
        <h3 className='bg-slate-400 text-white'> Save your money</h3>
      
      <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 '>
        <img className='block mx-auto h-24 rounded-sm sm:mx-0 sm:flex-shrink-0' src={image2} alt='welcome to Sew-trillion'/>
      </div>
    
      <div>
      <h> Top Rated products</h>
      <ul className='flex'>
        <li>
          <img  alt=''/>
        </li>
        <li>
          <img  alt=''/>
        </li>
        <li>
          <img alt='' />
        </li>
        <li>
          <img alt='' />
        </li>
        <li>
          <img alt='' />
        </li>
      </ul>
    </div>
    <div>
      <div>
      <h1> Best sell Products</h1>
      <div div className='flex'>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
        <div>
          <img alt=''/>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Home

      
     
    
   