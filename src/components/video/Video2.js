import React from 'react';
import './_video.scss' 
import { AiFillEye } from 'react-icons/ai'


function Video({ video,thumbnail, title, description,pic, url }) {
   
   return (
    <div className='video'  >
    <div className='video__top'>
       {/* <img src={thumbnail} alt='' />  */}
       <video height="450px" width="300px" poster={thumbnail} controls>
        <source src={video} type="video/mp4"/>
      
       </video>
       {/* <LazyLoadImage src={medium.url} effect='blur' /> */}
       {/* <span className='video__top__duration'>{_duration}</span> */}
    </div>
    <div className='video__title'>{title}</div>

    <div className='video__title'>{description}</div>
    {/* <div className='video__details'>
       <span>
           {numeral(views).format('0.a')} Views •
       </span>
       <span>{moment(publishedAt).fromNow()} </span>
    </div> */}
    <div className='video__channel'>
       <img src={pic} alt='' /> 
       {/* <LazyLoadImage src={channelIcon?.url} effect='blur' /> */}

       <AiFillEye /> <p className='video__details' href={url}>View</p>
    </div>
 </div>
  );
}

export default Video;