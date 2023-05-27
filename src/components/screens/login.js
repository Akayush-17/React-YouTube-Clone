import React, { useEffect } from 'react'
import "./_login.scss"
import { useHistory } from 'react-router-dom'

import { login } from '../../redux/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'


const LoginScreen = () => {
    
    const dispatch =useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)
    
    const handleLogin = () => {
        dispatch(login())
    }

    const history =useHistory()

    useEffect(()=>{
        if(accessToken){
            history.push('/')

        }

    },[accessToken,history])
    return (
        <div className="login">
            <div className='login__container'>
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick = {handleLogin}>
                  Login with google
                </button>
                <p>Login Now to get 3 month YouTube premium free.</p>
            </div>
        </div>
    )
}

export default LoginScreen