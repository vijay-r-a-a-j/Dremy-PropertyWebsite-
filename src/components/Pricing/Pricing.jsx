import React from 'react'
import PriceCrads from './PriceCards'
import { useState } from 'react'

const Pricing = () => {
  const [isAnually, setIsAnually] = useState(false)

  return (
    <div className=' p-5 md:p-10 lg:p-20' id='pages'>
        <div >
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-5'>Our Plan For Your Stratagies</h1>
                <p>The Mentioned began rural, oral vernacular that developed<br/>from trial
                and error to successful.</p>
            </div>
            <div className='p-2 rounded-md bg-slate-200 w-72 mx-auto mt-5'>
                <button  className={`px-10 py-2 rounded-md  ${isAnually?'bg-indigo-950 text-white':""}`} onClick={()=>setIsAnually(!isAnually)}>Anually</button>
                <button className={`px-10 py-2 rounded-md  ${isAnually?"":'bg-indigo-950 text-white'} `} onClick={()=>setIsAnually(!isAnually)}>Monthly</button>
            </div>
            <PriceCrads isAnually={isAnually} />
        </div>
        
    </div>
  )
}

export default Pricing