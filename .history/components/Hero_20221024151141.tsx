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
     <div className="relative">
 <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
     <div className="w-full lg:w-2/3 xl:w-1/2">
         <h1 className="font-sans text-base font-bold tracking-tight text-black text-opacity-70">Dont let bad services ruin your Day</h1>
         <p className="mt-6 tracking-tighter text-black">
             <span className="font-sans font-normal text-7xl">The road to the</span><br />
             <span className="font-serif italic font-normal text-8xl">perfect Cleaning Services</span>
         </p>
         <p className="mt-12 font-sans text-base font-bold text-black text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>
         <p className="mt-8 font-sans text-xl font-normal text-black">Starting at $9.99/month</p>

         <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
             <a
                 href="#"
                 title=""
                 className="
                     inline-flex
                     items-center
                     justify-center
                     px-5
                     py-2
                     font-sans
                     text-base
                     font-semibold
                     transition-all
                     duration-200
                     border-2 border-transparent
                     rounded-full
                     sm:leading-8
                     bg-green-600
                     sm:text-lg
                     text-white
                     hover:bg-opacity-90
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                 "
                 role="button"
             >
                 ORDER NOW
             </a>

             
         </div>
     </div>
 </div>
</div>
    </section>
  )
}

export default Hero