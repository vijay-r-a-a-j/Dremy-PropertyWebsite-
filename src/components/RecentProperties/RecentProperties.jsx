import React from 'react'
import Image1 from '../../assets/Recentprop1.jpg'
import Image2 from '../../assets/Recentprop2.jpg'
import Image3 from '../../assets/Recentprop3.jpg'
import { IoBedSharp } from "react-icons/io5"
import { GiBathtub } from "react-icons/gi"
import { FaXmark } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"

const RecentProperties = () => {
  const recentProperties=[
    {
      id:1,
      img:Image1,
      name:"Mitchell Park Plaza Apartments",
      price:"1300",
      bed:"2",
      baths:"2",
      sqft:"1200",
      location:"Dubai Production City"
    },
    {
      id:2,
      img:Image2,
      name:"Cottonwood Creek Apartments",
      price:"1400",
      bed:"3",
      baths:"2",
      sqft:"1600",
      location:"Dubai South World Central"
    },
    {
      id:3,
      img:Image3,
      name:"Ridge St Joseph Apartments",
      price:"1500",
      bed:"4",
      baths:"3",
      sqft:"1800",
      location:"Downtown Dubai, Forte 2"
    }
  ]
  return (
    <div className='bg-slate-200' id='listings'>
        <div className=' py-10 px-2 md:p-10 lg:p-28'>
          {/*Title and description */}
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-5'>Recent Property For Rent</h1>
            <p className='mb-5'>They will make a list of potential employees to <br/>interviewed based</p>
          </div>
         {/*Image gallery with description */}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {recentProperties.map((item)=>(
              <div className='rounded-lg p-3 bg-white grid-flow-row gap-5 hover:scale-105 duration-300 cursor-pointer' key={item.id}>
                <div className='mb-2'>
                  <img className='rounded-lg h-52 w-full' src={item.img}/>
                </div>
                <div className='flex justify-between mb-1'>
                  <p className='text-slate-600'>Rent</p>
                  <p className='text-xl font-semibold'>${item.price}</p>
                </div>
                <div className='mb-2'>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>
                </div>
                <div className='flex justify-between mb-2 text-slate-600'>
                    <div className='flex'>
                    <p className='p-1 bg-slate-200  rounded-full'><IoBedSharp  /></p> <p>{item.bed} Beds</p>
                    </div>
                    <div className='flex'>
                   <p className='p-1 bg-slate-200 rounded-full'> <GiBathtub  /></p><p>{item.baths} Baths</p>
                    </div>
                    <div className='flex'>
                    <p className='p-1 bg-slate-200 rounded-full'><FaXmark  /></p><p>{item.sqft} sqft</p>
                    </div>
                </div>
                <div className='flex mb-2 justify-between'>
                  <p className='flex'><span className='my-auto'><IoLocationSharp /></span><span className=' text-slate-600 my-auto'>{item.location}</span></p>
                  <button className='px-7 py-1 bg-blue-950 text-white rounded'>View</button>
                </div>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default RecentProperties