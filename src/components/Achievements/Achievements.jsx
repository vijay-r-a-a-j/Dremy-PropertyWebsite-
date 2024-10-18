import React from 'react'
import { FaHouseChimney } from "react-icons/fa6"
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6"
import { GiFamilyHouse } from "react-icons/gi"

const Achievements = () => {
const Data = [
    {
        icon:<FaHouseChimney />,
        value:"2500+",
        desc:"Completed Property"
    },
    {
        icon:<GiFamilyHouse />,
        value:"3500+",
        desc:"Property Sales"
    },
    {
        icon:<PiBuildingApartmentDuotone />,
        value:"8500+",
        desc:"Apartment Rent"
    },
    {
        icon:<FaPeopleRoof />,
        value:"4500+",
        desc:"Happy Clients"
    }
]

  return (
    <div className='bg-slate-200 px-28 py-14'>
        {/*Heading and description*/}
        <div className='text-center mb-5'>
        <h1 className=' text-4xl  font-bold mb-3'>Achievememt</h1>
        <p className='font-semibold'>Mentioned began rural, oral vernacular that developed from trial and <br/>successful.</p>
        </div>
        {/*Achievment data*/}
        <div className='flex flex-wrap lg:flex-nowrap gap-20 lg:mx-auto justify-center align-center'>
            {Data.map((item,index)=>(
                <div key={index} className='flex flex-col gap-1 text-center align-center'>
                    <p className='text-5xl text-green-500 mx-auto'>{item.icon}</p>
                    <p className='text-2xl font-bold'>{item.value}</p>
                    <p className='font-semibold'>{item.desc}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Achievements