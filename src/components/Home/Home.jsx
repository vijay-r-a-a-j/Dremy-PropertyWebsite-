import React from 'react'
import HomeImage from '../../assets/HomePage.jpg'
import NavBar from './NavBar'
import Intro from './Intro'
import SearchBox from './SearchBox'

const Home = () => {
  return (
    <div className=' h-screen w-full bg-cover' style={{backgroundImage:`url(${HomeImage})`}}>
      <div className='relative h-screen bg-black/60'>
        <NavBar/>
        <Intro />
        <SearchBox/>
        </div>
    </div>
  )
}

export default Home