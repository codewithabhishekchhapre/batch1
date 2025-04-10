import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCaller from '../data/apiCaller';

const Login = () => {
  
     const [formdata,setformdata]=useState({})
     const [result,setresult]=useState("")
     const navigator=useNavigate()

     function getdata(e){
          const {name,value}=e.target
          setformdata((prevdata)=>({
               ...prevdata,
               [name]:value
          }))
     }

     function submit(e){
          e.preventDefault()
       apiCaller("post","user/login",formdata)
       .then(res=>{
        if(res.success==true){
          localStorage.setItem("accessToken",res.data.accessToken)
              navigator("/user")
        }
        else{
          alert(res.error)
        }
       })

        
          // axios.post('https://dummyjson.com/user/login',formdata)
          // .then((res)=>{
          //      console.log(res)
          //      if(res.status==200){
          //           localStorage.setItem("accessToken",res.data.accessToken)
          //           navigator("/user")
          //      }
          // })
          // .catch((err)=>{
          //      setresult(err.response.data.message)
          // })
     }



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            name='username'
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => getdata(e)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name='password'
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => getdata(e)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>

        {/* {result && <p className="mt-4 text-center text-sm text-red-600">{result}</p>} */}
        {result?<p className="mt-4 text-center text-sm text-red-600">{result}</p>:null}
      </form>
    </div>
  );
};

export default Login;
