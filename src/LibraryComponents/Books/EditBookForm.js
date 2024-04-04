//NAME:JEGADHEESWARAN B
//DATE:7/12/23
import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import "./EditBookForm.css"

// This component allows users to edit the book details

const EditBookForm = (props) => 
{
    // Declare state variable 'editForm' to hold the current book details to be edited

    const [editForm,setEditForm]=useState(props.editBook);
    // This useEffect will run when 'props' change. 
    // It will update the 'editForm' state variable to the new book details passed through 'props'

    useEffect(()=>
    {
        setEditForm(props.editBook)
    },[props])
    // This function handles changes to the input fields.
    // This function handles changes to the input fields.
    // This function handles changes to the input fields.

    const handleChange=(e)=>
    {
        const{name,value}=e.target;
        setEditForm({...editForm,[name]:value.toUpperCase()})
    }
    // This function handles changes to the input fields.
    // This function handles changes to the input fields.
    // This function handles changes to the input fields.
    // This function handles changes to the input fields.

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(editForm.bookName === "" && editForm.bookAuthor === "") return;
        props.updateBook(editForm.id,editForm);
        
    }

    // Form contains two input fields for the book name and book author, a submit button, and a cancel button.
    // The 'handleChange' function is attached to the onChange event of both input fields, allowing the user to edit the book details.
    // The 'handleSubmit' function is attached to the onSubmit event of the form, allowing the user to save their changes.
    // The 'onClick' event of the cancel button calls the 'setEdit' function passed through 'props' with 'false' as its argument, effectively closing the form.



  return (
    <form onSubmit={handleSubmit} autoComplete='off' className='editFormControl'>
        
        <div className="editFormGroup">
        <input type='text' name='bookName' onChange={handleChange} value={editForm.bookName} placeholder='UPDATE BOOK NAME'/>
        </div>
        <div className="editFormGroup">
        <input type='text' name='bookAuthor' onChange={handleChange} value={editForm.bookAuthor} placeholder='UPDATE BOOK AUTHOR'/>
        </div>
        <button className='updateButton' type="submit"><MdEdit /></button>
        <button className='cancelButton' type="submit" onClick={()=>{props.setEdit(false)}}><MdCancel /></button>
    </form>
  )
}

export default EditBookForm