import React from 'react'
import {Link} from 'react-router-dom'

export const ProductCards = () => {
  return (
    <div>
        <div className='container border-separate shadow-sm border-spacing-3'>
            <p className='bg-pink-400 text-black text-bold'> Product cards</p>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Cereals</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Oil seeds</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Fertilizers</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Construction materials</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Agricultural Machine</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
             <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>water works</p>
                        </Link>
                    </li>
                </ul>
            </div>
             <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>electronics and house utilities</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
