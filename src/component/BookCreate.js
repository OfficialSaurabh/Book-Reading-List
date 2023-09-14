import { useState } from "react";

function BookCreate({ onCreate }) {

  const[title, setTitle]  = useState('')
  // Set title
  const handleChnage = (event) =>{
    setTitle(event.target.value)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    onCreate(title)
    setTitle('')
  }
  return(
    <div>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input type="text" value={title} onChange={handleChnage} />
      <button>Create</button>
    </form>
  </div>
  )
}
export default BookCreate;
