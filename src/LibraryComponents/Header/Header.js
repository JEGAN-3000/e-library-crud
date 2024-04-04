//NAME:JEGADHEESWARAN B
//DATE:7/12/23

// Import necessary libraries and components
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import React, { useState } from "react";
import "./Header.css";
import { GiBookCover } from "react-icons/gi";
// Create the AdminHeader component

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div className='bg-gray-900 flex flex-col md:flex-row justify-between items-center px-5 py-5 sticky top-0  text-teal-500 text-4xl z-10 '>
        
            <h1 className='flex md:text-4xl'><GiBookCover/>DIGITAL LIBRARY</h1>
        
        <div className='hidden md:block'>
            <ul className='flex gap-5 p-2 '>
                <li className="hover:border-b-2  duration-100" id='linkTags'><NavLink to='/'>HOME</NavLink></li>
                <li className="hover:border-b-2  duration-100" id='linkTags'><NavLink  to='about'>ABOUT</NavLink></li>
                <li className="hover:border-b-2 duration-100" id='linkTags'><NavLink to='book'>BOOKS</NavLink></li>
                <li className="hover:border-b-2 duration-100" id='linkTags'><NavLink to='contact'>CONTACT</NavLink></li>
            </ul>
        </div>
        {toggleMenu && (
          <nav className="block md:hidden sticky top-0">
          <ul className="fixed top-[110px] bg-slate-800 left-0  w-full h-1/5 flex gap-2 flex-col text-white text-2xl ">
            <li className=" text-center bg-teal-600" >
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className=" text-center bg-teal-600">
              <NavLink to="about">ABOUT</NavLink>
            </li>
            <li className=" text-center bg-teal-600" >
              <NavLink to="book">BOOKS</NavLink>
            </li>
            <li className=" text-center bg-teal-600">
              <NavLink to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      )}
      
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
        >
        <IoMenu className="text-white h-8 mr-[-14px]" />
      </button>
    </div>
    
        </>
  );
};
// Export the AdminHeader component

export default Header;
