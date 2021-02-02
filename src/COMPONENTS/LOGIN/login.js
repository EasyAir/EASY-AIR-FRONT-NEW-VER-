import * as s from './styles'
import 카카오 from '../../IMG/카카오.png'
import KakaoLogin from './kakao'
import 배경 from '../../IMG/배경.png'
import Loading from '../../PUBLIC/loading'
import {useState} from 'react'

const Login =()=>{
    const [toggle,setToggle] = useState(false);
    const loading=()=>{
        setToggle(true)
    }
    return(
        <s.Background style={{backgroundImage:`url(${배경})`}}>
            {(toggle)?<Loading></Loading>:""}
            <s.Made>MADE BY DSM HIGHSCHOOL</s.Made>
            <s.MenuBar>
                <s.MenuCircle><i className="fas fa-question"></i></s.MenuCircle> {/* 웹 소게 */}
                <s.MenuCircle><i className="fas fa-user-friends"></i></s.MenuCircle> {/* 팀 소개 */}
                <s.MenuCircle><i className="fas fa-wrench"></i></s.MenuCircle> {/* 사용법 */}
            </s.MenuBar>
            <s.Title><b>E</b>asy <b>A</b>ir</s.Title>
            <s.SubTitle>SNS 간편 로그인</s.SubTitle>
            <s.KakaoBox onClick={loading}>
                <img src={카카오} onClick={KakaoLogin} alt=""/>
            </s.KakaoBox>
        </s.Background>
    )
}

export default Login;