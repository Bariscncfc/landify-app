import React from 'react'


import bgImg from '../../assets/images/education.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-yellow-50 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 font-montserrat text-5xl md:text-7xl font-bold'>Academy of Your Business</h1>
                <p className='text-xl font-montserrat'>Organizes work so teams know what to do, why it matters, and how to get it done</p>
                <button className="px-8 py-3 bg-purple-600 rounded font-montserrat text-md font-bold text-white mt-2 tracking-tight	">Get Started</button>
            </div>
            <div>
                <img className='w-[80%]' src={bgImg} alt="/" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero
