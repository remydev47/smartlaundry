import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative h-[640px] w-full  bg-blue-500 sm:h-[55vh] md:h-[440px]'>
        <Image 
           src='/images/hero1.jpg'
           layout='fill'
           objectFit='cover'
         />
    </section>
  )
}

export default Hero