import React, { useState } from 'react'

function BookEdit({book, onSubmit}) {

  const[title, setTitle] = useState(book.title)
  const handelEdit =(event) =>{
    setTitle(event.target.value)
  }
  const handelSave =(event) =>{
    event.preventDefault()
    onSubmit(book.id, title)
    console.log(title)
  }
  return (
    <form action="" onSubmit={handelSave}  >
      <input type="text" value={title} onChange={handelEdit}  />
      <button>Save</button>
    </form>
  )
} 

export default BookEdit