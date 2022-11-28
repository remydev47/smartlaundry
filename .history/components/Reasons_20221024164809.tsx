import React from 'react'

const reasons =[
  {
      image:'/images/happy.png',
      title:'Personalized Experience',
      description:'We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.'
  },
  {
      image:'/images/lowest-price.png',
      title:'Affordable Pricing',
      description:'Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.'
  },
  {
      image:'/images/calendar.png',
      title:'Convenience',
      description:'With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.'
  },
  {
      image:'/images/quality.png',
      title:'Quality Cleaning',
      description:'We use the best in class products, to assure that your favorite clothes are always there for you to wear..'
  },
  {
      image:'/images/smartphone.png',
      title:'Excellent Result',
      description:'Forgot to wash your clothes for interview/business meeting, never mind. With our super express delivery, we would get your laundry done in less than 8 hours..'
  },
  {
      image:'/images/shuttle.png',
      title:'Instant Order Update',
      description:'Regular updates of your order, to help you keep a track of your laundry and plan accordingly.'
  }
]

const Reasons = () => {
  return (
    <section className="bg-[#fff] sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-serif font-bold leading-tight text-black  lg:text-5xl">Your<span className='text-green-500'>Comfort</span> Depends on Us</h2>
      <p className="max-w-xl mx-auto mt-4 text-xl font-extrabold leading-relaxed text-gray-300">
        Provide Worldwide Service For Good Customers
      </p>
    </div>

    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
      {reasons.map((item, i) => (
     <div className="overflow-hidden bg-white shadow-xl border-gray-300 rounded-md hover:bg-blue-700">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div>
              <img
               src={item.image} 
               className="h-60 w-60"
             />
             </div>
             <h2 className='font-bold text-3xl text-gray-400 text-center mt-2'>
               {item.title}
             </h2>
             <p className='text-xl text-black text-center '>
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

export default Reasons