import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-slate-500"> 
        <ul className="flex justify-between bg-gray-700 items-center  gap-[3vw]">
            <li>
            <Link className="hover:text-gray-500" to="/login">Login</Link>
          </li>
          <li>
            <Link className="hover:text-gray-500"to="/register">Register</Link>
          </li>
          <li>
            <Link className="hover:text-gray-500"to="/home">Home</Link>
          </li>
         
          <li>
            <Link className="hover:text-gray-500" to="/membership">Membership</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/products">Products</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/services">Services</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/savings">Savings</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/loan">Loan service</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/about">About us</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/contact">contact Us</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;