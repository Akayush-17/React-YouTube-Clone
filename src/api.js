import axios from 'axios'

const request =axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCcMxy7mG8YvQ9dfxzAN0OFX_oJEOW-14g",
    },
})

export default request