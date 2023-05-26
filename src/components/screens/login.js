import React from 'react'
import "./_login.scss"
const LoginScreen = () => {
    return (
        <div className="login">
            <div className='login__container'>
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png'" alt="" />
                <button>
                  Login with google
                </button>
                <p>Login Now to get 3 month YouTube premium free.</p>
            </div>
        </div>
    )
}

export default LoginScreen