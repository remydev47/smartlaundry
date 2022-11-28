import React from 'react'

const offers=[
  {
    id:"Salons & Spas",
    title:"Salons & Spas"
  },
  {
    id:"Automotive Detail and Repair Shop",
    title:"Automotive Detail and Repair Shop"
  },
  {
    id:"Hotels & Motels",
    title:"Hotels & Motels"
  },
  {
    id:"Massage Therapists",
    title:"Massage Therapists"
  },
  {
    id:"Sports Teams",
    title:"Sports Teams"
  },
  {
    id:"House Cleaning Companies",
    title:"House Cleaning Companies"
  },
  {
    id:"Restaurants and Caterers",
    title:"Restaurants and Caterers"
  },
  {
    id:"Hotels & Motels",
    title:"Hotels & Motels"
  },
  {
    id:"Therapist and Chiropractors",
    title:"Therapist and Chiropractors"
  },
  {
    id:"Assisted Living / Nursing Homes",
    title:"Assisted Living / Nursing Homes"
  },
  {
    id:'Hair Salons and Barber Shops',
    title:'Hair Salons and Barber Shops'
  },
  {
    id:'Religious Organizations',
    title:'Religious Organizations'
  }, 
  {
    id:'Athletic Facilities / Gym',
    title:'Athletic Facilities / Gym'
  },
]

const Commercial = () => {
  return (
    <section className="py-10 bg-[#FFF] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              COMMERCIAL LAUNDRY SERVICE
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
             Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. Our pick up and delivery laundry service is fast, convenient, and saves you time and money.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
             Laundry isn't your main business, but it is ours and we love it! For more information about our commercial laundry services and pricing and to schedule your first pick up, call us at 1 (800) 123-45-67
            </p>
        </div>
      </div>
      <h2 className='mt-2 text-3xl font-serif text-gray-500 sm:text-4xl'>OUR COMMERCIAL LAUNDRY CLIENTS INCLUDE:</h2>
      <ul className="list-none flex-col  hidden justify-center items-center ">
            {offers.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-serif font-normal cursor-pointer text-[16px]
                   ${index === offers.length - 1 ? 'mr-0' : 'mr-10'}
                  text-gray-500 `}
                >
                    <a>{nav.title}</a>
                </li>
            ))}
           </ul> 
    </section>
  )
}

export default Commercial