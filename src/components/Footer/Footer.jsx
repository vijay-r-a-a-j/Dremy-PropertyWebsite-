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
        <div className='flex px-24 py-10'>
            <div className='flex flex-col gap-5'>
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
                 {footerData.map((data,index)=>(
                     <div key={index} className='flex flex-col gap-5'>
                          <p className='text-xl font-bold'>{data.title}</p>
                         <p> {footerData.links.map((link,index)=>(
                            <a key={index}>{link}</a>
                          ))}</p>
                      
                     </div>
                 ))}
            </div>
        </div>
        {/*Copyrights area */}
        <div></div>
    </div>
  )
}

export default Footer