import { useEffect } from 'react';
import { Request } from '../../HOOKS/axios';
import * as s from './styles'

const TeamManage=()=>{
    useEffect(()=>{
        Request("get","team",{},{"Authorization": "Bearer "+window.localStorage.getItem("token"), "Content-Type": "application/json"},"팀 상세정보")
    })
    return(
        <>
        <s.Line/>
        <s.Container style={{height:"80%"}}> 
            <s.TeamName>TEAM 병진째찌</s.TeamName>
            <s.TeamCode>CODE : 12312314124ADFA</s.TeamCode>
            <s.DetailMenu>
                <s.DCnt>
                    <s.DetailTitle>공장 수</s.DetailTitle>
                    <s.Cnt>60 개</s.Cnt>
                </s.DCnt>
                <s.DCnt>
                    <s.DetailTitle>공기압축기 수</s.DetailTitle>
                    <s.Cnt>60 개</s.Cnt>
                </s.DCnt>
                <s.DCnt>
                    <s.DetailTitle>직원 수</s.DetailTitle>
                    <s.Cnt>60 명</s.Cnt>
                </s.DCnt>
            </s.DetailMenu>
            <s.ReplaceBtn
                onClick={()=>{
                    Request("post","code",{},{"Authorization": "Bearer "+window.localStorage.getItem("token")},"팀 코드 변경")
                }}
            >팀 코드 변경</s.ReplaceBtn>
        </s.Container>
        </>
    )
}

export default TeamManage;