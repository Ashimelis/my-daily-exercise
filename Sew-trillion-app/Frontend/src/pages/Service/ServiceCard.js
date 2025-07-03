import React from 'react'
import {Link} from 'react-router-dom'

export const ServiceCard = () => {
  return (
    <div>
        <div className='container border-separate shadow-sm border-spacing-3'>
            <p className='bg-pink-400 text-black text-bold'> Service cards</p>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>Consulting</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>Health services</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Car rent</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>House Rent</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p> Hotel</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
             <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>Maintenance</p>
                        </Link>
                    </li>
                </ul>
            </div>
             <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>Air ticket</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='bg-green-200 hover:bg-green-500 rounded-md border-black shadow-md'>
                        <Link to='#'>
                            <p>Guest house service</p>
                        </Link>
                       
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
