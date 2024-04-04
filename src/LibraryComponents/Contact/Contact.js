//NAME:JEGADHEESWARAN B
//DATE:7/12/23

import React from 'react'
import "./Contact.css"


const Contact = () => {
  return (
    <div className='AdminContactContainer mb-0 flex flex-col  justify-end'>

      <div name="contact" className="contactContainer flex flex-col" id="contact">
        <h1 >Contact</h1>
        <div className="contactDetails mb-0 text-center mx-auto md:text-4xl">
            <h3 className='md:text-2xl'><span>Email : </span>madurailibrary@gmail.com</h3>
            <h3 className='md:text-2xl'><span>Mobile : </span>+91 6384112910</h3>            
        </div>  
        </div>
    </div>
  )
}

export default Contact