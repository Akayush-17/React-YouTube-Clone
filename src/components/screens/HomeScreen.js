import React from 'react'
import {Col, Container, Row } from "react-bootstrap"
import "./_homescreen.scss"
import Video from "../video/Video"
import CategoriesBar from '../categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideo } from '../../redux/actions/video.action'
import { useEffect } from 'react'

function HomeScreen() {
  
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getPopularVideo())
  },[dispatch])

  const {videos} =useSelector(state=>state.homeVideos)
  
  return (
    <Container>
        <CategoriesBar/> 
        
        <Row>
         
            {videos.map((video) => (
                <Col lg={3} md={4}>
                
                   <Video video={video} key={video.id}/>
                </Col>
           ))}
        </Row>
    </Container>
  )
}

export default HomeScreen 