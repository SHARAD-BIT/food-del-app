

import { useContext, useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets"
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../Context/StoreContext";



const Navbar = ({SetShowLogin}) => {
const {getTotalCartAmount} = useContext(StoreContext)

  const [menu,setMenu] = useState("home")



  return (
    <div className="Navbar">
        
     <Link to="/home"> <img src={assets.logo} alt=""  className="logo" /> </Link>

<ul className="navbar-menu">
    <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>home</Link>
    <a href='#exlpore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
    <a href='#Appdown' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
    <a href='#Footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact-us</a>
</ul>
          

          <div className="Navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to="/cart   "> <img src={assets.basket_icon} alt="" /> </Link>
               
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
              
            </div>
            <button className="nav-sign" onClick={()=>SetShowLogin(true)}>sign in </button>
          </div>

        </div>
  )
}

export default Navbar
