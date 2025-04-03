import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='flex justify-around items-center bg-black text-white h-20 w-full'>
     <h1>Logo.</h1>
     <ul className='flex gap-2.5'>
          <li>Home</li>
          <li>Services</li>
          <Link to={"/contact"}>
          <li>Contact</li>
          </Link>
          <li>About</li>
     </ul>
     <div>
          <Link to={"/login"}>
          <button className='px-4 py-1 font-semibold bg-white mr-2 text-black'>Login</button>
          </Link>
          <button className='px-4 py-1 font-semibold bg-white text-black'>register</button>
     </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar