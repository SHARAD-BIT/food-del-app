import React, { useState } from 'react'
import "./index.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Footer from './components/Footer/Footer' 
import Login from './components/Login/login'
import { Routes,Route } from 'react-router-dom'
 
import Cart from './components/pages/Cart/Cart'
 import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'

const App = () => {


  const [showLogin, SetShowLogin] = useState(false);





  return (




    <>
      
      {
        showLogin? <Login SetShowLogin = {SetShowLogin} /> :<></>
      }

      <div className='App'>
      <Navbar SetShowLogin = {SetShowLogin} />
     

       <Routes>
        

        
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />




      </Routes> 
    </div>
    <Footer/>
    </>

  )
}

export default App