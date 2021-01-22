import * as s from './styles'
import 프로필 from '../../IMG/프로필.png'
import {Request} from '../../HOOKS/axios'
import { useEffect, useState } from 'react'

const CheckList =()=>{
    const [data, setData] = useState({
        number : "",
        date : "",
        name : ""
    });
    useEffect(()=>{ 
        Request("GET", "/overview/checksheet",{},{"Authorization": "Bearer " + window.localStorage.getItem("token"), "Content-Type": "application/json"} , "가장 최근에 작성된 점검표")
        .then((e)=>{
        })
    })
    return(
        <>
        <s.CheckBox>
            <s.BoxTitle>시리얼 넘버 : A123D123</s.BoxTitle>
            <s.Date>작성 날짜 : 2020-10-11</s.Date>
            <s.Writer>작성자 : 정지원</s.Writer>
            <s.ShowButton>확인하기</s.ShowButton>
        </s.CheckBox>
        <s.CheckBox>
            <s.BoxTitle>시리얼 넘버 : A123D123</s.BoxTitle>
            <s.Date>작성 날짜 : 2020-10-11</s.Date>
            <s.Writer>작성자 : 정지원</s.Writer>
            <s.ShowButton>확인하기</s.ShowButton>
        </s.CheckBox>
        <s.CheckBox>
            <s.BoxTitle>시리얼 넘버 : A123D123</s.BoxTitle>
            <s.Date>작성 날짜 : 2020-10-11</s.Date>
            <s.Writer>작성자 : 정지원</s.Writer>
            <s.ShowButton>확인하기</s.ShowButton>
        </s.CheckBox>
        </>
    )
}

const Change =()=>{
    return(
        <>
        <s.ChangeBox>
            <s.Flex>
                <a>시리얼 넘버 : AZD12312Q3</a>
                <a>날짜 : 2020-10-11</a>
            </s.Flex>
            <s.Flex style={{marginTop:"5px", fontSize:"13px", color:"gray"}}>작성자 : 정지원</s.Flex>
            <s.Flex>
                <ul>
                    <li>PART A</li>
                    <li>PART B</li>
                    <li>PART C</li>
                    <li>PART D</li>
                    <li>PART E</li>
                    <li>PART F</li>
                </ul>
            </s.Flex>
        </s.ChangeBox>
        </>
    )
}

const Mmeber =()=>{
    return(
        <>
        <s.MemberBox>
            <img src={프로필} alt=""/>
            <div>
                <a>정지원</a>
                <a>MEMBER NAME</a>
            </div>
            <div>
                <a>01028172423</a>
                <a>MEMBER PHONE NUMBER</a>
            </div>
        </s.MemberBox>
        </>
    )
}

const Overview =()=>{
    return(
        <>
        <s.Line/>
        <s.Container>
            <s.ProfileBox>
                <s.ProfileImg src={프로필}></s.ProfileImg>
                <s.Name>NAME : 정지원</s.Name>
                <s.Intro>TEAM MANAGER</s.Intro>
                <s.TeamButton>TEAM : 삼성물산</s.TeamButton>
            </s.ProfileBox>
            <s.ShowBox>
                <s.DetailBar>
                    <a><i className="far fa-chart-bar"></i> 최근에 작성한 점검표</a>
                </s.DetailBar>
                <s.CheckContainer>
                    <CheckList></CheckList>
                </s.CheckContainer>
                <s.DetailBar style={{marginTop:"50px"}}>
                    <a><i className="far fa-chart-bar"></i> 최근에 작성한 교체표</a>
                </s.DetailBar>
                <s.ChangeContainer>
                    <Change></Change>
                    <Change></Change>
                    <Change></Change>
                </s.ChangeContainer>
                <s.DetailBar style={{marginTop:"50px"}}>
                    <a><i className="far fa-chart-bar"></i> 작업이 가장 임박한 직원</a>
                </s.DetailBar>
                <Mmeber></Mmeber>
                <Mmeber></Mmeber>
                <Mmeber></Mmeber>
            </s.ShowBox>
        </s.Container>
        </>
    )
}

export default Overview;