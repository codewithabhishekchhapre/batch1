import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StoryCard from './components/StoryCard ';
import Loader from './components/Loader';

function Home() {
     const [count,setcount]=useState(0);
     const [increment,setincrement]=useState(0);
     const [data,setdata]=useState([]);
     const [loading,setloading]=useState(true);

  useEffect(()=>{
        axios.get("https://dummyjson.com/posts")
        .then((res)=>{

          console.log(res.data.posts)
          setdata(res.data.posts)
          setloading(false)
        })
  },[])
  console.log(data)
     // console.log("outer function ")
if(loading){
  return <Loader/>
}

  return (
   <>

   <div className='flex flex-wrap gap-4'>


    {data.map((singledata)=>{
      return <StoryCard data={singledata}/>
    }).slice(0,6)}
    </div>



   </>
  )
}

export default Home