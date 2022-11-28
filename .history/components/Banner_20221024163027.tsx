import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className='relative h-[400px] w-full  bg-blue-500 sm:h-[55vh] md:h-[440px]'>
      <Image 
           src='/images/banner.jpg'
           layout='fill'
           objectFit='cover'
         />
    </section>
  )
}

export default Banner