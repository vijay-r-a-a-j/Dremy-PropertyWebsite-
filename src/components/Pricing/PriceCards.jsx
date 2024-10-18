import React, { useState } from 'react'
import { PiStarFourFill } from "react-icons/pi"

const PriceCards = ({isAnually}) => {
    const pricingData = [
        {
            plan:"Lite ",
            desc:"They will make a list of potential employees to be based",
            monthly:"120",
            anually:"1200"
        },
        {
            plan:"Basic ",
            desc:"They will make a list of potential employees to be based",
            monthly:"150",
            anually:"1500"
        },
        {
            plan:"Plus ",
            desc:"They will make a list of potential employees to be based",
            monthly:"220",
            anually:"2200"
        }
    ]

    


  return (
    <div className='my-10'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {pricingData.map((data,index)=>(
           <div className='rounded-2xl shadow-2xl  hover:scale-105 duration-300 cursor-pointer' key={index}>
               <div className='bg-indigo-950 text-white rounded-t-2xl'>
               <div className='text-center flex flex-col gap-5 p-10 '>
                <h3 className='text-2xl font-semibold '>{data.plan} Plan</h3>
                <p className=''>{data.desc}</p>
                <p className='flex mx-auto text-4xl font-bold'>${isAnually?data.anually:data.monthly}<span className='my-auto text-xl font-light'>/{isAnually?"year":"mon"}</span></p>
                <button className='py-3 bg-white text-black rounded'>Select Plan</button>
               </div>
               </div>
               <div className='p-10'>
                <ul className='flex flex-col gap-5 text-slate-600'>
                    <li className='flex'><PiStarFourFill  className='mr-5 my-auto  text-black'/> 60 Listings</li>
                    <li className='flex'><PiStarFourFill className='mr-5 my-auto text-black' /> Contact with Agent</li>
                    <li className='flex'><PiStarFourFill  className='mr-5 my-auto text-black'/> One Year validity</li>
                    <li className='flex'><PiStarFourFill  className='mr-5 my-auto text-black'/> 7/24 Fully Support</li>
                </ul>
               </div>

            </div>
        ))}
         </div>
    </div>
  )
}

export default PriceCards
