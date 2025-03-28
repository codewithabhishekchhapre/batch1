import React from 'react'

function Navbar() {
  return (
    <>
      <div className='h-20 w-full px-10 flex bg-[#361a71] justify-around items-center text-white'>
        <div>
          <h1 className='font-semibold text-2xl'>Logo.</h1>
        </div>

        <div>
          <ul className='flex gap-3'>
            <li className='underline'>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>services</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <button className='border py-1 rounded-lg px-5 mr-2'>Login</button>
          <button className='border py-1 rounded-lg bg-white text-[#361a71] px-5 mr-2'>Register</button>
        </div>
      </div>
    </>
  )
}

export default Navbar