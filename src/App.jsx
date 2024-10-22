import Home from './Pages/Home'
import Register from './Pages/Register'
import { Route,Routes } from 'react-router-dom'
import React from 'react';



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
        <Route path='/register' element={<Register />}></Route>
      </Routes>







    </>
  )
}

export default App