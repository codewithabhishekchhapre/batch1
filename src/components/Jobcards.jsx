import React from 'react'

function Jobcards(props) {
  return (
    <div className="h-[350px] w-80 bg-gray-200 rounded-2xl p-4">

     <div className='w-full h-12 flex justify-between items-center'>
          <div className='h-10 w-10 rounded-full bg-amber-300 overflow-hidden'>
               <img src="data:image/png;base64,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" className='h-full w-full object-cover' alt="" />
          </div>
          <button className='border rounded-lg text-gray-500  px-3  border-gray-400'>{props.data.is_saved==true?"saved":"save"}</button>
     </div>

     <div className='mt-4 flex flex-col gap-1'>
          <h2 className='font-semibold text-lg'>{props.data.companyName} <span className='text-xs font-medium text-gray-400'>{props.data.daysAgo} Days Ago</span></h2>
          <h1 className='font-bold text-2xl text-gray-600 '>{props.data.position}</h1>
          <div>
          {props.data.tags.map(function(tag){
               return  <button className='bg-gray-400 text-black px-3 py-0.5 font-medium rounded-lg mr-1'>{tag}</button>
          })}
         
          {/* <button className='bg-gray-400 text-black px-3 py-0.5 font-medium rounded-lg mr-1'>Senior-level</button> */}
          </div>
     </div>

     <div className='flex justify-between items-center mt-16 border-t-2 border-t-gray-300 pt-3'>
          <div>
               <h2 className='font-bold'>{props.data.salary}/month</h2>
               <p className='text-gray-400'>{props.data.address}</p>
          </div>
          <button className='bg-black text-white px-3 py-1 font-bold rounded-lg'>Apply Now</button>
     </div>

    </div>
  )
}

export default Jobcards