import * as s from './styles'
import 프로필 from '../../IMG/프로필.png'
import {Request} from '../../HOOKS/axios'
import { useEffect, useState } from 'react'
import ReplaceSheet from '../CHECK/replaceSheet'
import CheckSheet from '../CHECK/checkSheet'

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
            <s.Line />
            <s.Container>
                <s.ProfileBox>
                    <s.ProfileImg src={프로필}></s.ProfileImg>
                    <s.Name>NAME : 정지원</s.Name>
                    <s.Intro>TEAM MANAGER</s.Intro>
                </s.ProfileBox>
                <s.ShowBox>
                    <s.DetailBar>
                        <a><i className="far fa-chart-bar"></i> 최근에 작성한 교체표</a>
                    </s.DetailBar>
                    <s.FlexContainer>
                        <ReplaceSheet></ReplaceSheet>
                        <ReplaceSheet></ReplaceSheet>
                        <ReplaceSheet></ReplaceSheet>
                    </s.FlexContainer>
                    <s.DetailBar>
                        <a><i className="far fa-chart-bar"></i> 최근에 작성한 점검표</a>
                    </s.DetailBar>
                    <s.FlexContainer>
                        <CheckSheet></CheckSheet>
                        <CheckSheet></CheckSheet>
                        <CheckSheet></CheckSheet>
                    </s.FlexContainer>
                    <s.DetailBar>
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