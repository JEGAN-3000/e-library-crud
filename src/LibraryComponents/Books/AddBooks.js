//NAME:JEGADHEESWARAN B
//DATE:7/12/23
// Import necessary dependencies
// importing React module
import React from 'react'
// importing CSS file for styling

import "./AddBooks.css"
// importing necessary icons from react-icons module

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// importing Element component from react-scroll module for smooth scrolling

import {Element,Link} from "react-scroll"

// Create functional component for display books
const AddBooks =(props)=>
{

    // calculating the length of the books array
    const bookLength=props.books.length
    return(
    <Element name='books' className='p-3 md:text-4xl'>      
       {/* This Element component represents a single location on the page that you can scroll to. */}
        <table className='text-white  md:text-4xl   '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BOOK NAME</th>
                    <th>BOOK AUTHOR</th>                    
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    /* Checking if the length of the books array is greater than 0 */
                    props.books.length>0  ? (
                                            /* Mapping over the books array to render each book as a row in the table */

                        props.books.map((book)=>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.bookName}</td>
                            <td>{book.bookAuthor}</td>                           
                            <td>
                                {/* Calling the editRow function from the props when the edit button is clicked */}
                                <button className='editButton' onClick={()=>props.editRow(book)}><MdEdit /></button>
                                {/* Calling the deleteBook function from the props when the delete button is clicked */}
                                <button className='deleteButton' onClick={()=>props.deleteBook(book.id)}><MdDelete /></button>
                            </td>
                        </tr>
                        )
                    )) : (                        
                        <tr>                            
                            {/* If there are no books, display a single row in the table indicating this */}
                            <td colSpan={4}>No Books Found</td>
                        </tr>
                    )
                }                
            </tbody>
            <tfoot>
                <tr>
                    <td className='text-center' colSpan={4}>{`Total books : ${bookLength}`}</td>
                </tr>
                <tr>
                {/* If there are more than 5 books, render a button to go back to the previous section */}
                {props.books.length>5 ? (<Link to='books' smooth={true} duration={1000}>
                    <button className='editButton' >back</button>
                    </Link>):(<td></td>)}
                </tr>
            </tfoot>
        </table>        
    </Element>
    )
}
export default AddBooks


