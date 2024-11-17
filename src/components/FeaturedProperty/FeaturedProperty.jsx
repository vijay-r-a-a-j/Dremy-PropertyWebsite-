import React from 'react'
import Property1 from '../../assets/Property1.jpg'
import Property2 from '../../assets/Property2.jpg'
import Property3 from '../../assets/Property3.jpg'
import Descrpition from './Descrpition'



const FeaturedProperty = () => {
  return (
    <div className=' py-20 px-3 lg:p-20 ' id='features'> 
        <h1 className='text-4xl font-bold mb-10'>Featured Property</h1>
      <div className='flex flex-wrap lg:flex-nowrap gap-8 '>
         <div className='w-full lg:w-1/2 relative' >
            <img className='rounded-lg lg:h-96 w-full 'src={Property1}  />
            <Descrpition title={"Paradise Residence"} place={"Lawyen,Surakarta"}/>
         </div>
      <div className=' w-full lg:w-1/2 grid gap-8 '>
      <div className=' relative'>
            <img className='rounded-lg lg:h-44 w-full'src={Property2}/>
            <Descrpition title={"Cluster Nirwana"} place={"Dubai Production City"}/>
       </div>
       <div className=' relative'>
            <img className='rounded-lg lg:h-44  w-full'src={Property3}/>
            <Descrpition title={"Srikandi Housing"} place={"Downtown Dubai, Forte 2"}/>
       </div>
</div>
</div>     
    </div>
  )
}

export default FeaturedProperty