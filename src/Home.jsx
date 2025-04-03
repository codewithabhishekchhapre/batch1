import React, { useEffect, useState } from 'react'

function Home() {
     const [count,setcount]=useState(0);
     const [increment,setincrement]=useState(0);

     useEffect(()=>{
          console.log("hello")
     },[increment])

     // console.log("outer function ")

  return (
    <div className='h-screen w-full flex justify-center items-center'>
     <h1>This is a home page {count}</h1>


     <button onClick={()=>{setcount(count+1)}}>click me </button> 
     <br />
     <h1>increment {increment}</h1>

     <button className='border-amber-500 bg-black text-white' onClick={()=>{setincrement(increment+1)}}>increment </button>
    </div>
  )
}

export default Home