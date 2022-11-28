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
       <div className="absolute inset-0">
        <div className='flex flex-col items-center mx-4 mt-16 text-center '>
                <h1 className={styles.innerbanner}>
                  TAP. CLEAN. DELIVER.
                </h1>
                <span className='text-xl text-black sm:text-2xl'>
                    Reliable house cleaning professionals serving the greater Nairobi & Kiambu county area
                </span>
                <button className='p-2 font-semibold text-black bg-green-500 rounded-xl'>
                    Send a Quote
                </button>
              </div>
        </div>
    </section>
  )
}

const styles ={
  innerbanner:`text-2xl font-bold font-serif uppercase tracking-wide text-black sm:text-4xl md:text-5xl lg:text-6xl`,
}

export default Banner