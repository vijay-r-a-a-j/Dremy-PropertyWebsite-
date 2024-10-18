import React from 'react'
import MobileImage from '../../assets/MobileApp1.jpg'
import { BiLogoPlayStore } from "react-icons/bi"
import { SiApple } from "react-icons/si"

const MobileApp = () => {
  return (
    <div className=' px-32  hidden md:block'>
        <div className='flex '>
            <div className='w-1/2 p-20  '>
                 <img src={MobileImage} className='rounded-2xl' alt='mobile image'/>
            </div>
            <div className='w-1/2    my-auto'>
                <h1 className='text-4xl font-bold mb-5'>Free Download App For<br/>Android And Iphone</h1>
                <p className='text-xl mb-5'>When your seraching for a job, there are a few things you <br/>
                can do to get the most of your search</p>
                <div className='flex gap-5 text-white'>
                    <div className='flex gap-2 px-3 py-2 bg-black rounded'>
                        <div><BiLogoPlayStore className='text-white w-10 h-10'/></div>
                        <div>
                        <p className='text-[10px]'>GET IT ON</p>
                        <p className='text-xl'>Google Play</p>
                        </div>
                    </div>
                    <div className='flex gap-2 px-3 py-2 bg-black rounded'>
                        <div> <SiApple className='text-white w-10 h-10'/></div>
                        <div>
                           <p className='text-[10px]'>Download on the</p>
                           <p className='text-xl'>App Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileApp