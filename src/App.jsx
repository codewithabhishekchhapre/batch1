import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './evening/Navbar'
import Login from './components/Login'
import Home from './Home'
import Contact from './evening/Contact'
import UserList from './components/UserList '
import Details from './components/Details'
import Meprofile from './components/Meprofile'

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<UserList/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Meprofile/>}/>
      <Route path='*' element={<Home/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App