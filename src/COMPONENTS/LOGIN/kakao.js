import Kakao from 'react-kakao-login';
import axios from 'axios'

let token;
let team;
const KakaoLogin = () => { // 카카오 로그인 구현
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject('Kakao 인스턴스가 존재하지 않습니다.')
        }
        window.Kakao.init('97539593073279dc0a725dbcbdda891c')
        window.Kakao.Auth.login({
          success: (auth) => {
            console.log('정상적으로 로그인 되었습니다.', auth)
            console.log(JSON.stringify(auth))
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: function(response) {
                    console.log(response);
                    console.log(response.kakao_account.email)
                    console.log(response.properties.nickname)
                    
                     axios({ // 로그인 정보 제출
                      method: 'post',
                      url:'http://easyair.herokuapp.com/auth',
                      headers:{
                        "Content-Type": "application/json"
                      },
                      data:{
                        "api_key" : "easyair",
                        "name" : response.properties.nickname ,
                        "email" : response.kakao_account.email
                      }
                    }).then((res)=>{
                      console.log('토큰 보여주기')
                      console.log(res);
                      token = res.data.access_token;
                      team = res.data.team_id;
                      console.log(token);
                      window.localStorage.setItem("token", token)
                      window.localStorage.setItem("team", 1)
                      if(team != "undefined"){
                        window.location.href = window.location.href + "overview"; 
                      }
                      else{
                        window.location.href = window.location.href + "team"; 
                      }
                    }).catch((err)=>{
                      console.log('토큰 에러')
                      console.log(err);
                    }) 
                },
                fail: function(error) {
                    console.log(error);
                }
            });
          },
          fail: (err) => {
            console.log('카카오 에러?')
            console.error(err)
          }
        })
      })
    } catch (err) {
      console.error(err)
    }
  }

  export default KakaoLogin;