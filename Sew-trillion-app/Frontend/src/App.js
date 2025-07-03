import "./index.css"
import React from "react-dom"
import Home from './pages/HomePage/Home.js'
import Dashboard from './pages/Dashboard/Dashboard.js'
import LoanService from './pages/LoanService/LoanService.js'
import Membership from './pages/Membership/MemberShip.js'
import Products from './pages/Products/Products.js'
import Saving from './pages/Saving/Saving.js'
import Services from './pages/Service/Services.js'
import Trainings from './pages/Trainings/Trainings.js'
import AboutUs from './pages/AboutUs/AboutUs.js'
import ContactUs from './pages/ContactUs/ContactUs.js'
import Layout from "./pages/Layout/Layout.js"
import {  Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <div className=" flex-grow-0 shadow-black border-spacing-2">
        <header className=" overflow-x-autoauto bg-gradient-to-r from-red-500 px-4 py-4">
          
          <h1 className="text-white text-bold">SEW-Trillion</h1>
          <div className="object-cover object-center">
            <div className="inline space-x-4 gap-16 px-4 py-2 justify-items-end">
              <button className="w-full max-w-24 bg-green-300 shadow-md  rounded-md">{'Login'}</button>
            </div>
            <div className="inline space-x-4 gap-16 px-4 py-2 justify-items-end">
              <button className="w-full max-w-24 bg-green-300 shadow-md rounded-md">Sign Up</button>
            </div>

          </div>
      </header>
      </div>
      <div className="shadow-lg border bg-slate-300">
        <Layout />
      </div>
      <div className=" px-2 py-4 justify-center items-center   flex space-x-8">
        <Routes>
          
          <Route index element={ <Home/>}/>
          <Route path='dashboard' element={ <Dashboard/>}/>
           <Route path='loan' element={ <LoanService/>}/>
            <Route path='membership' element={ <Membership/>}/>
             <Route path='products' element={ <Products/>}/>
              <Route path='saving' element={ <Saving/>}/>
               <Route path='services' element={ <Services/>}/>
                <Route path='trainings' element={ <Trainings/>}/>
                 <Route path='about' element={ <AboutUs/>}/>
                  <Route path='contact' element={ <ContactUs/>}/>
        </Routes>
      </div>
      <footer>
        <div className=" flex bg-yellow-300  items-center justify-center shadow-lg border-rounded gap-4">
         <div className=' shadow-lg px-8 py-5 border w-96'>
          <span> Adders</span>
          <h2> Phone Number</h2> <h3> 0922147734</h3>
          <h2> email</h2> <h3> ...@gmail.com</h3>
          <h2> Tel</h2> <h3> 0922147734</h3>
         </div>
         <div className='shadow-lg px-8 py-5 border w-96'>
          <span> Adders</span>
          <h2> Phone Number</h2> <h3> 0922147734</h3>
          <h2> email</h2> <h3> ...@gmail.com</h3>
          <h2> Tel</h2> <h3> 0922147734</h3>
         </div>
         <div className='shadow-lg px-8 py-5 border w-96'>
          <span> Social Media</span>
          <h2> Facebook</h2> <h3> 0922147734</h3>
          <h2> LinkendIn</h2> <h3> ...@gmail.com</h3>
          <h2> Website Adders</h2> <h3> 0922147734</h3>
         </div>
        </div>
      </footer>
      </div>
  );
}

export default App;
