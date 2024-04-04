//NAME:JEGADHEESWARAN B
//DATE:7/12/23

// IMPORTING REACT LIBRARY
import React from 'react'
// IMPORTING CSS STYLE
import "./SearchBook.css"
// IMPORTING SEARCH ICON
import { BsSearch } from "react-icons/bs";
// COMPONENT FOR SEARCHING BOOKS
const SearchBooks = ({Search,setSearch}) => {
  return (
    <div className='searchBookFormContainer p-5'>
        <form className='searchForm flex flex-col md:flex-row p-5' onSubmit={e=>e.preventDefault()}>            
            <div className="searchFormGroup">                  
            <input id='search' type='text' placeholder='SEARCH BOOK' value={Search} onChange={e=>setSearch(e.target.value.toUpperCase())}/>
            <div className='searchIcon'><BsSearch /></div>
            </div>
        </form>
    </div>
  )
}
// EXPORTING COMPONENT
export default SearchBooks