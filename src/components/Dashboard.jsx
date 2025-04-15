import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div className='h-screen w-screen flex bg-gray-100'>
     {/* dashboard side bar */}
     <div className='w-[15%] h-[90%] flex justify-start items-center flex-col bg-sky-900 '>
          <ul className='text-white text-2xl font-bold flex flex-col gap-5 mt-10'>
               <NavLink to={"/dashboard"}>
               <li>My profile</li>
               </NavLink>
               <NavLink to={"/dashboard/employees"}>
               <li>Employee</li>
               </NavLink>
               <li>Attandence</li>
               <li>Salary</li>
          </ul>
     </div>

     {/* dashboard content */}
     <div className='w-[85%] h-[90%] bg-sky-100 '>
          <Outlet/>
     </div>
    </div>
    </>
  )
}

export default Dashboard