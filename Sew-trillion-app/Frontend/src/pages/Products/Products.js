import React  from 'react'
import { ProductCards } from './ProductCards.js'
//import {getAllCereals} from '../api'
import { useNavigate } from 'react-router-dom';

function Products() {
  
  const navigate = useNavigate();
  



  return (
    <div className='container'>
      <button className='btn bg-green-200 hover:bg-green-800' onClick={() => navigate(-1)}> Go Back</button>
      <div className='title'>
        
      </div>
      <div className='Cereal-container border-spacing-4'>
        <ProductCards/>
      </div>
    </div>
  )
}

export default Products