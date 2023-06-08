import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className=' justify-center flex bg-tertiary w-full h-[75px] mt-3 items-center'>
        <p className='text-center  text-white font-medium text-[18px]'>© {year} All rights reserved by Vijayan</p>    
        </div>
  )
}

export default Footer
