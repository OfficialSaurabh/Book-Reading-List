import { useState } from "react";

function BookCreate({ onCreate }) {

  const[title, setTitle]  = useState('')
  // Set title
  const handleChnage = (event) =>{
    setTitle(event.target.value)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!title){
      alert('Please enter a title')
      return;
    }
    onCreate(title)
    setTitle('')
  }

  // Add a funtion that without writing the title, the button will not work
  




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
