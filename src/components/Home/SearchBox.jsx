import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl"

const SearchBox = () => {

  const items= [
    {value:'Buy', label:'Buy'},
    {value:'Rent', label:'Rent'},
    {value:'Sale', label:'Sale'}
  ]
  const [value,setValue] = useState('Buy')

  return (
    <div className='w-auto flex flex-wrap lg:flex-nowrap md:mx-auto md:w-[75%] lg:w-[50%] py-2 bg-white mt-5 lg:mt-20 rounded-md'>
      
      {/*Radio Buttons */}
      <div className='flex gap-7 py-3 px-5 mx-auto md:mx-0   md:border-r-4'>
        {items.map((item)=>(
          <div className='flex gap-2 ' key={item.value}>
            <input
               name='purpose'
               type='radio'
               className='cursor-pointer '
               value={item.value}
               id={item.value}
               checked={value=== item.value}
               onChange={e=>setValue(e.target.value)}
            />
            <label className='font-semibold ' htmlFor={item.value} >{item.label}</label>
          </div>
        ))}

      </div>
      {/*Search box */}
      <div  className='hidden md:flex '>
        <p className='my-auto mx-2'><SlLocationPin className='' /></p>
        <form  className='py-3 lg:pr-28 '>
          <input
           type='text'
           name='search'
           className='focus:outline-none'
           placeholder='Search for a property'
          />
        </form>
        <button className='md:px-6 hover:scale-105 lg:px-5 py-3 bg-indigo-950 text-gray-400 rounded '>Search</button>
      </div>
    </div>
  )
}

export default SearchBox