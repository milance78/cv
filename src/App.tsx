import React from 'react'
import Home from './pages/home/Home'
import Inner from './pages/inner/Inner'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='inner/' element={<Inner />} />
      </Routes>
    </div>
  )
}

export default App