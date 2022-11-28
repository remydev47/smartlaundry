import React from 'react'

const services=[
  {
    image:"/images/plumber.png",
    title:'Alternations & Repairs',
    description:"We have expert seamstresses and tailors on staff to ensure we meet and exceed your fitting requirements"
  },
  {
    image:"",
    title:'Steam Iron',
    description:"Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package"
  },
  {
    image:"",
    title:'Shoe Cleaning',
    description:"We use premium products and standardised processes to take care of your shoes and give them refreshed look."
  },
  {
    image:"/images/cleaning.png",
    title:'Laundry Services',
    description:"Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package."
  },
  {
    image:"/images/housekeeper.png",
    title:'Dry Cleaning',
    description:"SMU students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results."
  },
  {
    image:"/images/carpet-cleaner.png",
    title:'Carpet Cleaning',
    description:"To keep carpet at peak performance, we recommend professional deep cleaning your carpet every 12 to 18 months."
  },
]

const Services = () => {
  return (
    <section className="bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-serif leading-tight text-gray-600  lg:text-5xl">Our <span className='text-green-300'>Services...</span></h2>
      <p className="max-w-xl mx-auto mt-4 font-serif text-2xl font-extrabold leading-relaxed text-gray-500">
        Provide Worldwide Service For Good Customers
      </p>
    </div>

    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
      {services.map((item, i) => (
     <div className="overflow-hidden bg-white border-2 border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div>
              <img
               src={item.image} 
               className=""
             />
             </div>
             <h2 className='font-bold font-serif text-3xl text-gray-400 text-center mt-2'>
               {item.title}
             </h2>
             <p className='text-xl font-serif text-black text-center '>
              {item.description}
             </p>
          </div>                     
     </div>
     ))}
    </div>
</div>
</section>
  )
}

export default Services