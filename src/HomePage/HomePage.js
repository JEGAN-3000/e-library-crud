// Import necessary libraries and components for HomePage
import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

// Creating a functional component for HomePage
const HomePage = () => {
 return (
    <div>
      <h1>HOME PAGE</h1>
      <button><Link to="adminLogin">ADMIN</Link></button>
      <button><Link to="memberLogin">MEMBER</Link></button>
     
    </div>
 )
}

// Export the HomePage component to be used as a Root Page
export default HomePage