import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import data from './data/profile.json'
import Jobcards from './components/Jobcards'
// import jobdata from "./data/jobdata.json"

function App() {

  var jobdata=[
    {
      "companyName": "Tech Innovators",
      "daysAgo": 2,
      "position": "Senior Frontend Developer",
      "tags": ["Full-Time", "Remote"],
      "salary": 90000,
      "address": "San Francisco, CA",
      "is_saved":true
    },
    {
      "companyName": "CodeCrafters Ltd.",
      "daysAgo": 7,
      "position": "Junior Backend Developer",
      "tags": ["Full-Time", "Junior", "On-Site"],
      "salary": 55000,
      "address": "New York, NY",
      "is_saved":false
    },
    {
      "companyName": "Digital Dynamics",
      "daysAgo": 9,
      "position": "Mid-Level UI/UX Designer",
      "tags": ["Part-Time", "Mid-Level", "Hybrid"],
      "salary": 50,
      "address": "Austin, TX",
      "is_saved":true
    },
    {
      "companyName": "NextGen Solutions",
      "daysAgo": 5,
      "position": "Software Engineer",
      "tags": ["Full-Time", "Mid-Level", "On-Site"],
      "salary": 80000,
      "address": "Seattle, WA",
      "is_saved":false
    },
    {
      "companyName": "CloudNet Technologies",
      "daysAgo": 8,
      "position": "DevOps Engineer",
      "tags": ["Contract", "Senior", "Remote"],
      "salary": 85,
      "address": "Remote",
      "is_saved":true

      
    }
  ]
  

  return (
    <>
    <div className='h-screen overflow-hidden flex justify-center items-center pt-32 flex-wrap gap-4 '>
      {
        jobdata.map(function(data){
          return  <Jobcards data={data}/>
        })
      }
     
{/* 
    {
      data.map(function(value){
        return <Profile data={value}/>
      })
    } */}

    </div>
    {/* <Navbar/> */}
    {/* <HeroSection/> */}
    </>
  )
}

export default App