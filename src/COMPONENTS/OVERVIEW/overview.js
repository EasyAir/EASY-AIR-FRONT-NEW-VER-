import * as s from './styles'
import 프로필 from '../../IMG/프로필.png'
import {Request} from '../../HOOKS/axios'
import { useEffect, useState } from 'react'

const CheckList =()=>{
    useEffect(()=>{ 
       Request("GET","clients",{},"공장 리스트 반환").then((res)=>{
           console.log(res);
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
            </s.ShowBox>
        </s.Container>
        </>
    )
}

export default Overview;