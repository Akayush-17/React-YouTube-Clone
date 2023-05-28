import React, {useState} from 'react'
import {Col, Container, Row } from "react-bootstrap"
import "./_homescreen.scss"
// import Video from "../video/Video"
import CategoriesBar from '../categoriesBar/CategoriesBar'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPopularVideo } from '../../redux/actions/video.action'
import { useEffect } from 'react'
import Video2 from '../video/Video2'
// import InfiniteScroll from 'react-infinite-scroll-component'



const HomeScreen = () => {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://internship-service.onrender.com/videos?page=2');
        const data = await response.json();
        setVideos(data.data.posts);
      } catch (error) {
        console.log('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  


  

// function HomeScreen() {
  
//   const dispatch= useDispatch()
//   useEffect(()=>{
//     dispatch(getPopularVideo())
//   },[dispatch])

//   const {videos} =useSelector(state=>state.homeVideos)

  
  return (
    <Container>
        <CategoriesBar/> 
        
        <Row>
         
          
          
          
         
            {videos.map((video) => (
                <Col lg={3} md={4}>
                
                <Video2
          key={video.postId}
          video={video.submission.mediaUrl}
          thumbnail={video.submission.thumbnail}
          title={video.submission.title}
          description={video.submission.description}
          url={video.submission.hyperlink}
          pic={video.creator.pic}
        />
           </Col>
           ))} 
         
        </Row>
    </Container>
  )
}

export default HomeScreen 