import React, { useEffect } from 'react'
import apiCaller from '../data/apiCaller'

function Meprofile() {

     useEffect(()=>{
          apiCaller("get","users/1",true)
          .then(res=>{
               console.log(res)
          })
     },[])
  return (
    <div>Meprofile</div>
  )
}

export default Meprofile