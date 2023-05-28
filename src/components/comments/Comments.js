import React from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'


const comments = () => {

  const handleComment=()=>{
     //
  }
  return (
    <div className='comments'>
      <p>1234 comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkkFg8kAsa4wR6D_50rA1Q9SDSA9LeM2_l8LUiLOCzlx4gCgnh59n1bsk0nvGzoCQMoM&usqp=CAU"
           alt="" 
           className='rounded-circle mr-3'
           />
           <form
              onSubmit={handleComment}
              className='d-flex flex-grow-1'>
                <input 
                type="text"
                className='flex-grow-1'
                placeholder='write a comment....'
                />
                <button className='border-0 p-2'>Comment</button>
              </form>
      </div>
    <div className='comments__list'>
      {[...Array(15)].map(()=>(
        <Comment/>
      ))}
    </div>  
  </div>
  )
}

export default comments