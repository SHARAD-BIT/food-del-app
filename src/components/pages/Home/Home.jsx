import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import Fooddisplay from '../../FoodDisplay/fooddisplay'
import Appdown from '../../Appdownload/Appdown'
const Home = () => {

  const [category,setCategory]=useState("ALL")

  return (
    <div>


<Header/>
<ExploreMenu category={category} setCategory={setCategory} />
<Fooddisplay category={category}/>
<Appdown/>


    </div>
  )
}

export default Home