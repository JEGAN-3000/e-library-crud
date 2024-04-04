import React from 'react'
import AddBookForm from './AddBookForm'
import AdminHeader from '../../Header/AdminHeader/AdminHeader'
import EditBookForm from './EditBookForm'
import AddBooks from './AddBooks'
import SearchBooks from './SearchBooks'

const Books = () => {
  return (
    <div>
        <AdminHeader/>
        <AddBookForm/>
        {/* <EditBookForm/> */}
        {/* <SearchBooks/> */}
        {/* <AddBooks/> */}
    </div>
  )
}

export default Books