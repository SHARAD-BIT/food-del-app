import React from 'react'
import "./Appdown.css"
import { assets } from '../../assets/assets/frontend_assets/assets'
const Appdown = () => {
  return (
    <div className='Appdown' id='Appdown'>

<p>
         For Better Experience Download  <br/>  Tomato App

</p>
<div  className='platform' id='platform'>

    <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />



</div>



    </div>
  )
}

export default Appdown