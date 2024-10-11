import React from 'react'
import HomeImage from '../../assets/HomePage.jpg'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div className='h-screen bg-cover' style={{backgroundImage:`url(${HomeImage})`}}>
        <NavBar/>
    </div>
  )
}

export default Home