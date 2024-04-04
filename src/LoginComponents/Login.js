//NAME:JEGADHEESWARAN B
//DATE:7/12/23

// Import necessary React modules


import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import "./AdminLogin.css"
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { Link } from 'react-router-dom'
// Create a functional component named AdminLogin

const AdminLogin = () => 
{  
    
  //SIGN IN VALIDATION
 // Use useState to declare state variables

    const navigate=useNavigate()
    const[adminInput,setAdminInput]=useState(
        {            
            username:"",
            password:""
        }
    )
 // Create a function to handle form submission
    
    function AdminLoginSubmit(e)
    {
    e.preventDefault() // Prevent default form submission behavior

    // Check if username and password match "admin"
    
    if(adminInput.username === "admin" && adminInput.password ==="admin" )
    {
        alert("Admin is authenticated");
        setAdminInput({username:"",password:""});
        navigate("/adminHome")
    }
    else
    {
        alert("username or Password was wrong");            
    } 
  }
  
    

  return (
    <div className='RegisterPage'> 
    <div className="AdminContainer" id='AdminContainer'>         
        <div id='adminLoginForm' className="AdminFormContainer ">            
            <form className='AdminFormContent' onSubmit={AdminLoginSubmit} autoComplete='off'>
                {/* <div className='AdminLogoutIcon'>
                    <Link to="/"><RiLogoutCircleLine /></Link>
                </div>  */}
                
                <h1>Admin Login</h1> 
                
                <input type='text' value={adminInput.username} name='adminUsername' placeholder='Enter the Username' onChange={(e)=>setAdminInput({...adminInput,username:e.target.value})} required/>  

                <input type='password' name='adminPassword' value={adminInput.password} placeholder='Enter the password' onChange={(e)=>setAdminInput({...adminInput,password:e.target.value})} required/>

                <button type='submit'>Login</button>
            </form>
        </div>        
    </div>
    </div>
  )
}
// Export the AdminLogin component

export default AdminLogin