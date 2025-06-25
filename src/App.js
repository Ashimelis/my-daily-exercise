import "./index.css"
import React from "react-dom"
import {  Routes, Route, } from "react-router-dom"
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/HomePage/Home";
import MemberShip from "./pages/Membership/MemberShip";
import Products from "./pages/Products/Products";
import Services from "./pages/Service/Services";
import Saving from "./pages/Saving/Saving";
import LoanService from "./pages/LoanService/LoanService";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContatacUs/ContactUs";
function App() {
  return (
    <div>
      <div>
        <header className="bg-gradient-to-r from-red-500">
          <h1> SEW-Trillion</h1>

      </header>
      </div>
      <div>
        <Routes>
          <Route path='/' element={ <Layout/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/register' element={ <Register/>}/>
          <Route path='/home' element={ <Home/>}/>
          <Route path='/membership' element={ <MemberShip/>}/>
          <Route path='/products' element={ <Products/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/savings' element={ <Saving/>}/>
          <Route path='/loan' element={ <LoanService/>}/>
          <Route path='/about' element={ <AboutUs/>}/>
          <Route path='/contact' element={ <ContactUs/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
