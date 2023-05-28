import React from 'react'
import './_videoMetaData.scss'
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'

const VideoMetaData=()=> {
  return (
    <div className='videoMetaData py-2'>
      <div className='videoMetaData__top'>
        <h5>Video Title</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span></span>
        
        <div>
          <span>
            <MdThumbUp className='mr-3' size={26}/>
          </span>
          <span>
            <MdThumbDown className='mr-3' size={26}/>
          </span>
        </div>
        </div>

      </div>
      <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
        <div className='d-flex'>
          <img className='rounded-circle mr-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkkFg8kAsa4wR6D_50rA1Q9SDSA9LeM2_l8LUiLOCzlx4gCgnh59n1bsk0nvGzoCQMoM&usqp=CAU" alt=""/>
          <div className='d-flex flex-column'>
            <span>Gro</span>
            <span>Subscriber</span>
            
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'>Subscriber</button>
      </div>
      <div className='videoMetaData__description'>
        <ReactShowMoreText  
        lines={3}
        more="SHOW MORE"
        less="SHOW LESS"
        anchorClass='showMoreText'
        expanded={false}
        
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. 
        </ReactShowMoreText>
      
      </div>
    </div>
  )
}

export default VideoMetaData