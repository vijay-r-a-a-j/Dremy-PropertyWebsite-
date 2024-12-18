import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu"
import { FaXmark } from "react-icons/fa6"
import {Link} from "react-scroll"
import Signup from './Signup'

const NavBar = () => {
    
    const menuItems = [
        {
            link:"Home",
            path:"home"
        },
        {
            link:"Listings",
            path:"listings"
        },
        {
            link:"Features",
            path:"features"
        },
        {
            link:"Pages",
            path:"pages"
        },
        {
            link:"Add property",
            path:"Add property"
        },
    ]
    const[open,setOpen] = useState()
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
  
    const handleOpenSignup = () => setIsSignupOpen(true);
    const handleCloseSignup = () => setIsSignupOpen(false);
    const handleSuccess = () => {
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 3000); // Auto-hide after 3 seconds
    };
    

  

  return (
    <div className='flex mx-5 lg:mx-28 py-10 justify-between'>
        <div><h1 className='text-4xl text-white font-semibold'><a href='/'>Dremy</a></h1></div>
        <div >
          <ul className={`flex flex-col lg:flex-row gap-5 lg:gap-10  text-xl 
                            h-screen lg:h-auto mt-12 lg:mt-2 absolute lg:static left-0
                              backdrop-blur-xl text-white lg:backdrop-blur-none 
                                lg:text-white w-full py-10 lg:py-0 px-5 transition-all duration-500 ease-in
                                     ${open?"left-0":"left-[-800px] md:left-[-1000px]"}`}>
            {menuItems.map((menu,index)=>(
                <li className=' hover:text-slate-400 hover:scale-105 duration-300 cursor-pointer' key={index}>
                    <Link spy={true} smooth={true}  to={menu.path}>{menu.link}</Link>
                </li>
            ))}
          </ul>
        </div>
        <div>
            <button onClick={handleOpenSignup} className='hidden lg:flex bg-indigo-950 px-7 py-2 rounded text-white
                  hover:bg-indigo-900 hover:scale-125 duration-300'>
                    Sign In
            </button>
            {successMessage && (
        <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded shadow">
          Signed up successfully!
        </div>
      )}

      {/* Signup Modal */}
      <Signup
        isOpen={isSignupOpen}
        onClose={handleCloseSignup}
        onSuccess={handleSuccess}
      />
            <button onClick={()=>setOpen(!open)} className='block lg:hidden mt-2'>{open ? <FaXmark className='w-8 h-8 text-white' />:<LuMenu className='w-8 h-8 text-white'/>}</button>
        </div>
    </div>
  )
}

export default NavBar