import React from 'react'

const NavBar = () => {
    
    const menuItems = [
        {
            link:"Home",
            path:"home"
        },
        {
            link:"Listings",
            path:"lisitings"
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

  return (
    <div className='flex mx-5 lg:mx-28 py-10 justify-between'>
        <div><h1 className='text-4xl text-white font-semibold'><a href='/'>Dremy</a></h1></div>
        <div >
          <ul className=' hidden lg:flex gap-10 text-white text-xl mt-2 '>
            {menuItems.map((menu,index)=>(
                <li className=' hover:text-slate-400 hover:scale-105 duration-300' key={index}>
                    <a href={menu.path}>{menu.link}</a>
                </li>
            ))}
          </ul>
        </div>
        <div>
            <button className='bg-indigo-950 px-7 py-2 rounded text-white
                  hover:bg-indigo-900 hover:scale-125 duration-300'>
                    Sign In
            </button>
        </div>
    </div>
  )
}

export default NavBar