import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './evening/Navbar'
import Login from './components/Login'
import Home from './Home'
import Contact from './evening/Contact'

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App