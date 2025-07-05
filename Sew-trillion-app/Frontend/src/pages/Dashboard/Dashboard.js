import React from 'react'
import Transaction from './Transaction.js'
function Dashboard() {
  return (
    <div>
      <header>
        <p className='text-center text-white bg-orange-400'> This is header</p>

      </header>
      <main className='container border-rounded shadow-lg'>
        <div className='grid gap-4 grid-cols-2 shadow-inner hover:border-blue justify-between'>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 '>
            <Transaction/> 
          </div>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Membership data</p>
          </div>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Total deposit</p>
          </div>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Saved money</p>
          </div>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Top Products</p>
          </div>
          <div className='grid gap-x-y gap-y-2 grid-cols-2 shadow-inner'>
            <p>Top Service</p>
          </div>
          <div className='grid gap-x-4 gap-y-2 grid-cols-2 shadow-inner'>
            <p> Member Data</p>
          </div>
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <div className='bg-black  border-sky-100 border-rounded'>
            <p className='text-white'>
              Revenue
            </p>
            <div>
              <p>Revenue details</p>
            </div>
            </div>
            <div className='bg-black border-sky-100 border-rounded'>
            <p className='text-white'>
              Sales
            </p>
            <div>
              <p>sales detail</p>
            </div>
          </div>
          <div className='bg-black  border-sky-100 border-rounded'>
            <p className='text-white'>
            Purchase
          </p>
          <div>
            <p> Purchase  details</p>
          </div>
          </div>
          
        </div>

      </main>
    </div>
  )
}

export default Dashboard