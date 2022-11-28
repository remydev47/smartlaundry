import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='items-center bg-[#fff] justify-center'>
      <Image 
        src="/images/logo.png"
        alt='cleanu'
        height={60}
        width={150}
      />
    </div>
  )
}

export default Logo
