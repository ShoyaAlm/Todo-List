import React from 'react'
import Setup from './Setup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom'
import Home from './pages/home' 

function ShowTask () {
  return (

    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}>
        {/* <Route path='/main' element={<Setup/>}/> */}

        </Route>


      </Routes>

    </BrowserRouter>



    // <div>
    //   <Setup/>
    // </div>
  )
}



export default ShowTask


