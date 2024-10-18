import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io"

const Descrpition = ({title,place}) => {
  return (
    <div className='rounded-lg flex justify-between absolute left-8 right-8 bottom-5 p-2 bg-white  hover:scale-105 duration-300 cursor-pointer'>
         <div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='flex'><IoLocationSharp className='w-4 h-4 text-gray-900 my-auto mr-1' /> {place}</p>

         </div>
         <div className='my-auto'>
            <button className='rounded-full bg-slate-200 p-2'><IoIosHeart className='w-5 h-5' /></button>
         </div>
    </div>
  )
}

export default Descrpition