import React from 'react'
import image from "../../Assets/istockphoto2.webp"
import image2 from "../../Assets/istockphoto3.webp"

function Home() {
  return (
    
     <div className='inline-block'>
      <div className='flex'>
        <div className='border-round shadow-lg'>
        <h1 className='bg-slate-400 text-yellow-300'> Welcome to Sew-trillion</h1>
        <h3 className='bg-slate-400 text-white'> We Build and Grow Together</h3>
      </div>
      <div className='justify-start w-60 h-20 object-fill'>
      <img src={image} alt='welcome to Sew-trillion'/> 
    </div>
     </div>
      
       <div className='border-round shadow-lg'>
        <h1 className='bg-slate-400 text-yellow-400'> Invest in your future</h1>
        <h3 className='bg-slate-400 text-white'> Save your money</h3>
      </div>
      <div className='justify-start w-60 h-20 object-fill'>
      <img src={image2} alt='welcome to Sew-trillion'/> 
    </div>
    <div className='inline'>
      <div>
      <h> Top Rated products</h>
      <div className='flex'>
        <div>
          <img  alt=''/>
        </div>
        <div>
          <img  alt=''/>
        </div>
        <div>
          <img alt='' />
        </div>
        <div>
          <img alt='' />
        </div>
        <div>
          <img alt='' />
        </div>
      </div>
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
      </div>
      
    
  )
}

export default Home

      
     
    
   