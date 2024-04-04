//NAME:JEGADHEESWARAN B
//DATE:7/12/23

import React from 'react'
import "./Home.css"
import library from "../../Assets/LIBRARY.jpg"
import library1 from "../../Assets/LIBRARY1.jpg"
import library2 from "../../Assets/LIBRARY2.jpg"

const Home = () => {
  return (
    <div className='AdminHomeContainer flex flex-col md:flex-row'>      
      <div className='homeContent'>
      <div className='flex gap-10 flex-col md:flex-row p-10 mx-auto'>
          <img src={library} alt='img1' className=' w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full hover:scale-110 duration-500 grayscale hover:grayscale-0'/>
          <img src={library1} alt='img2' className=' w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full hover:scale-110 duration-500 grayscale hover:grayscale-0'/>
          <img src={library2} alt='img3' className=' w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full hover:scale-110 duration-500 grayscale hover:grayscale-0'/>
        </div>
      </div>
    </div>
  )
}

export default Home