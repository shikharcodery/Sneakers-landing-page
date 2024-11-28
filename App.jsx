import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Form from './components/form'

import { HashRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    
    <HashRouter>
   
    <Routes>
    <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
             
            </>
          }
        />
      <Route path='/Form' element= {<Form/>}/>
     
   </Routes>
    </HashRouter>
    
    
  )
}

export default App
