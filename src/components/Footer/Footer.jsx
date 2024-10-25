import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti"
import { TiSocialTwitter } from "react-icons/ti"

const Footer = () => {
    const footerData=[
        {
            title:"Home",
            links:["Appraise","Buy","Sell","How it works?"]
        },
        {
            title:"Company",
            links:["About us","Reviews","FAQs","Stories"]
        },
        {
            title:"Contact",
            links:["+99 458 555 4785","Info.property.com","Contact us","Terms of service"]
        }
    ]
  return (
    <div className='mt-10'>
        {/*Footer content */}
        <div className='flex flex-wrap lg:flex-nowrap gap-10 px-10 py-10 lg:px-24 lg:py-10 bg-slate-100'>
            <div className='flex flex-col gap-5 pr-32'>
                <h2 className='text-4xl font-bold'>Dremy</h2>
                <p className='text-slate-600 flex-col gap-2'>People most commonly get pets<br/>
                for companionship,to protect a <br/>
                home or property or because care</p>
                <div className='flex gap-5'>
                        <a className='border border-blue-950  p-1 rounded-full hover:scale-125 duration-300'><TiSocialFacebook  className='w-10 h-10'/></a>
                        <a className='border border-blue-950  p-1 rounded-full hover:scale-125 duration-300'><TiSocialInstagram className='w-10 h-10' /></a>
                        <a className='border border-blue-950  p-1 rounded-full hover:scale-125 duration-300'><TiSocialLinkedin  className='w-10 h-10'/></a>
                        <a className='border border-blue-950  p-1 rounded-full hover:scale-125 duration-300'><TiSocialTwitter className='w-10 h-10' /></a>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-32'>
                 {footerData.map((data,index)=>(
                     <div key={index} className='flex flex-col gap-5'>
                          <p className='text-xl font-bold'>{data.title}</p>
                          <ul className='flex flex-col gap-5'> {data.links.map((link,i)=>(
                            <a className=' text-gray-600 hover:text-black cursor-pointer' key={i}>{link}</a>
                          ))}</ul>
                      
                     </div>
                 ))}
            </div>
        </div>
        {/*Copyrights area */}
        <div className='bg-indigo-950 text-slate-200 py-5 text-center'>
            Copyright @ 2023 Dremy All rights reserved
        </div>
    </div>
  )
}

export default Footer