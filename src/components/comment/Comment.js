import React from 'react'
import './_comment.scss'

const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkkFg8kAsa4wR6D_50rA1Q9SDSA9LeM2_l8LUiLOCzlx4gCgnh59n1bsk0nvGzoCQMoM&usqp=CAU"
        alt=""
        className='rounded-circle mr-3'
        />
        <div className='comment__body'>
            <p className='comment__header'>
                Sumit Dey  
            </p>
            <p>Nice video</p>
        </div>
    </div>
  )
}

export default Comment