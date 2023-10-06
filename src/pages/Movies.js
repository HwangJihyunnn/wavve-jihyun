import React from 'react'

const Movies = () => {
  const Rest_api_key='f6a6dda8e8eeade1e1adc1472badfffa' //REST API KEY
    const redirect_uri = 'http://localhost:3000/movies' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <div className='movies'>
      <input type="email" placeholder='이메일' />
      <input type="password" placeholder='비밀번호'/>
      <button>로그인하기</button>
      <button onClick={handleLogin} className='kakao-btn'>카카오 로그인</button>
    </div>
    
    
    )
   
}


export default Movies
