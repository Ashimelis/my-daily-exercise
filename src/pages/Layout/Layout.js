import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
         
          <li>
            <Link to="/membership">Membership</Link>
          </li>
           <li>
            <Link to="/products">Products</Link>
          </li>
           <li>
            <Link to="/services">Services</Link>
          </li>
           <li>
            <Link to="/savings">Savings</Link>
          </li>
           <li>
            <Link to="/loan">Loan service</Link>
          </li>
           <li>
            <Link to="/about">About us</Link>
          </li>
           <li>
            <Link to="/contact">contact Us</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;