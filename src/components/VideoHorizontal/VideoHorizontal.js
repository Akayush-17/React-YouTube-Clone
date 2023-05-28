import React from 'react'
import './_videoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const VideoHorizontal = () => {
  return (
    <Row
    className='py-2 m-1 videoHorizontal align-items-center'
 >
    {/* //TODO refractor grid */}
    <Col
       xs={6}
       md={4}
       className='videoHorizontal__left'>
       <LazyLoadImage
          src="https://cdn.gro.care/a387d54789f4_1683524902456.jpeg"
          effect='blur'
          className="videoHorizontal__thumbnail" 
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
       />
       
          <span className='videoHorizontal__duration'>5 mins</span>
      
    </Col>
    <Col
       xs={6}
       md={8}
       className='p-0 videoHorizontal__right'>
       <p className='mb-1 videoHorizontal__title'>Be a full stack developer in One month</p>

     
          <div className='videoHorizontal__details'>
             <AiFillEye />  Views •
           
          </div>
      

          <p className='mt-1 videoHorizontal__desc'>Watch to know more</p>
 

       <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
        
             {/* <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkkFg8kAsa4wR6D_50rA1Q9SDSA9LeM2_l8LUiLOCzlx4gCgnh59n1bsk0nvGzoCQMoM&usqp=CAU" effect='blur' />
          */}
          <p className='mb-0'>Gro</p>
       </div>
       
          <p className='mt-2'>
              Videos
          </p>

    </Col>
 </Row>
    
  )
}

export default VideoHorizontal