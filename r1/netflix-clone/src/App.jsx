import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'
import Navbar from './components/navbar'
import { AuthContextProvider } from './context/authContext'
import ProtectedRoute from './components/protectedRoute'

const App = () => {
  return (
    <>
    <AuthContextProvider>

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
