import React from 'react'
import image from "../../Assets/istockphoto2.webp"
import image2 from "../../Assets/istockphoto3.webp"

function Home() {
  return (
    
     <div className=' static container max-auto inline-block'>
      <div className='flex box-border float-left'>
        <div className='absolute top-0 left-0 border-round shadow-lg'>
        <h1 className='bg-slate-400 relative text-yellow-300'> Welcome to Sew-trillion</h1>
        <h3 className='bg-slate-400 relative text-white'> We Build and Grow Together</h3>
      </div>
      <div className='justify-start w-60 h-20 object-fill'>
      <img className='float-right' src={image} alt='welcome to Sew-trillion'/> 
    </div>
     </div>
      <div className='flex box-border float-right'>
        <div className='border-round shadow-lg'>
        <h1 className='bg-slate-400 text-yellow-400'> Invest in your future</h1>
        <h3 className='bg-slate-400 text-white'> Save your money</h3>
      </div>
      <div className='justify-start w-60 h-20 object-fill'>
      <img className='float-left' src={image2} alt='welcome to Sew-trillion'/> 
    </div>
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

      
     
    
   