import React from 'react'

function Dashboard() {
  return (
    <div>
      <header>
        <p> This is header</p>

      </header>
      <main>
        <div>
          <div>
            <p> Transaction History</p>
          </div>
          <div>
            <p> Transaction History</p>
          </div>
          <div>
            <p> Total deposit</p>
          </div>
          <div>
            <p> Saved money</p>
          </div>
          <div>
            <p> Top Products</p>
          </div>
          <div>
            <p>Top Service</p>
          </div>
          <div>
            <p> Member Data</p>
          </div>
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <div className='bg-black'>
            <p className='text-white'>
              Revenue
            </p>
            </div>
            <div className='bg-black'>
            <p className='text-white'>
              Sales
            </p>
          </div>
          <div className='bg-black'>
            <p className='text-white'>
            Purchase
          </p>
          </div>
          
        </div>

      </main>
    </div>
  )
}

export default Dashboard