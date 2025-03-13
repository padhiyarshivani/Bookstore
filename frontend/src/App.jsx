import React from 'react'
import Home from './Home/Home'
import Courses from "./Courses/Courses"
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contectus from './components/Contectus'
// import Login from './components/Login'
import Loginnew from './components/Loginnew'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
// import About from './components/About'
import AboutFine from './About/AboutFine'
import Admin from "./Admin/Admin"
const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={authUser ? <Courses /> : <Navigate to="loginnew" />} />
          <Route path="/Contect" element={<Contectus />} />
          <Route path="/Loginnew" element={<Loginnew />} />
          <Route path="/about" element={<AboutFine />} />
          <Route path="/admin" element={<Admin />} />
          
          <Route path="/Course/Loginnew" element={<Loginnew />} />

          {/* <Route path="/Login" element={<Login />} /> */}

          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
