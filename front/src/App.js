import React from 'react'
import Setup from './Setup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
import Home from './pages/home' 
import ShowCase from './pages/objectives';

import NavBar from './pages/NavBar'

const App = () => {
  return (

    <BrowserRouter>
    <NavBar/>
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/objectives' element={<ShowCase />} />

      </Routes>

    </BrowserRouter>

  )
}



export default App
