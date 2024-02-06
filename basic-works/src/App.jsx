import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
 </React.Fragment>
  )
}

export default App
