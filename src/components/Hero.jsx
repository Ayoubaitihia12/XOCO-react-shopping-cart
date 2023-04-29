import React from 'react'
import hero from '../img/hero.jpg'
import {BiRightArrowAlt} from 'react-icons/bi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex flex-col-reverse lg:flex-row lg:items-start items-center justify-between max-w-[1200px] px-10 py-14 mx-auto gap-10'>
            <div className='flex flex-col lg:items-start items-center gap-6 mt-4'>
                <h3 className='text-xl font-semibold text-gray-400'>Absolutely hot collections</h3>
                <h1 className='sm:text-5xl text-4xl lg:text-left text-center font-bold leading-tight'>The best place To Find And Buy Amazing <span>Product</span></h1>
                <Link className='flex items-center gap-2 bg-black text-white px-6 py-4 rounded-md cursor-pointer' 
                to='product' 
                smooth duration={500}
                >
                    <span className='sm:text-lg text-md font-semibold'>Shop Now</span>
                    <BiRightArrowAlt size={25}/>
                </Link>
            </div>
            <img src={hero} className='w-[500px]' alt="hero" />
        </div>
    </div>
  )
}

export default Hero