import React from 'react'

const Steps = () => {
  return (
  <>
  <section className="bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
     <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-4xl font-bold font-serif leading-tight text-gray-600  lg:text-5xl">
        WE ARE PASSIONATE ABOUT LAUNDRY​
       </h2>
       <p className="mt-4 font-serif text-xl font-normal leading-relaxed text-gray-500">
        We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about changing the way you think about laundry!
      </p>
     </div>
    </div>
    <How />
  </section>
</>
  )
}

export default Steps

const How = () => {
  return(
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                            <img src='/images/step1.png' className='h-[100px] w-[150px] rounded-full' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-blue-700 md:mt-10">Find Us First Now</h3>
                    <p className="mt-4 text-base text-gray-600">Bug Up all your Dirty Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                         <img src='/images/step2.png' className='h-[100px] w-[100px] rounded-full' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-blue-700 md:mt-10">Choose Services</h3>
                    <p className="mt-4 text-base text-gray-600">We pick-Up your Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                        <img src='/images/step3.png' className='h-[100px] w-[100px] rounded-full' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-blue-700 md:mt-10">Book Appointment</h3>
                    <p className="mt-4 text-base text-gray-600">We Clean your Clothes.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                        <img src='/images/step4.png' className='h-[100px] w-[100px] rounded-full' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-blue-700 md:mt-10">Book Appointment</h3>
                    <p className="mt-4 text-base text-gray-600">We deliver Clean, Foldes Clothes.</p>
                </div>

            </div>
        </div>
    </div>
 </section>
  )
}