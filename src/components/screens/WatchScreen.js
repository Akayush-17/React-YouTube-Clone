import React from 'react'
import { Row,Col } from 'react-bootstrap'
import './_watchScreen.scss'
import VideoMetaData from '../videoMetaData/VideoMetaData'
import VideoHorizontal from '../VideoHorizontal/VideoHorizontal'
import Comments from '../comments/Comments'


const WatchScreen=({video})=> {


  return (
    <Row>
        <Col lg={8}>
        <video className='watchScreen__player' autoPlay>
        <source src={video} type="video/mp4"/>
      
       </video>
            {/* <div className='watchScreen__player'>
                <iframe src={`https://cdn.gro.care/${key}`} title="Youtube Free Online Web"allowFullScreen width='100%' height="100%"></iframe>
            </div> */}
            <VideoMetaData />
            <Comments />
            
            
        </Col>
        <Col lg={4}>
       {[...Array(10)].map(()=>(<VideoHorizontal/>))}
        </Col>
    </Row>
  )
}

export default WatchScreen