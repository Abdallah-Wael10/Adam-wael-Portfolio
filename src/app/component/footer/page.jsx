import React from 'react'
import footerImage from "../../images/desadam.svg"
import logo from "../../images/adamlogo.png"

import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='w-full h-max  flex flex-col justify-center items-center'>
                <div className='w-full h-max flex justify-center items-center '>
                    <Image src={footerImage} alt="footer image" className='w-[60%] h-full max-[600px]:w-[87%]' />
                </div>
                <div className="w-full h-[230px] flex justify-center items-center bg-[#90D9EF]">
  <Image 
    src={logo} 
    alt="logo" 
    width={100} 
    height={100} 
    className="w-[100px] h-[100px] object-contain" 
    quality={100} 
    priority 
  />
</div>

    </footer>
  )
}

export default Footer
