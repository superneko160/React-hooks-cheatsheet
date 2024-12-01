import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Users from './pages/Users'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/user' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
