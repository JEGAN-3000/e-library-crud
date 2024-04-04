import React from 'react'


const BookContents = ({books}) => {
  return (
    <main>
        {(books.length)?(
            <ul>
                {books.map((books)=>(
                    <li className='item' key={books.id}>{books.id}<label>{books.bookName} {books.bookAuthor}</label>
                    {/* <input type='button' value="delete" onClick={()=>handleDelete(item.id)}/>                     */}
                    </li>
                ))}
            </ul>):(<p>your todo list is empty</p>)
        }
    </main>
  )
}

export default BookContents