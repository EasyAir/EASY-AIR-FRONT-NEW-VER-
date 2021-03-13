import { useEffect, useState } from 'react';
import { Request } from '../../HOOKS/axios';
import Loading from '../../PUBLIC/loading';
import * as s from './styles'

const TeamManage=()=>{
    const [team,setTeam] = useState({
        name:"",
        code:"",
        client_count:"",
        compressor_count:"",
        server_count:""
    });

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        Request("get","team",{},{"Authorization": "Bearer "+ window.localStorage.getItem("token"), "Content-Type": "application/json"},"팀 상세정보")
        .then((e)=>{
            setTeam(e)
            setLoading(false)
        })
    },[])

    return(
        <>
        { loading && <Loading/> }
        <s.Line/>
        <s.Container style={{height:"80%"}}> 
            <s.TeamName>TEAM {team.name}</s.TeamName>
            <s.TeamCode>CODE : {team.code}</s.TeamCode>
            <s.DetailMenu>
                <s.DCnt>
                    <s.DetailTitle>공장 수</s.DetailTitle>
                    <s.Cnt>{team.client_count} 개</s.Cnt>
                </s.DCnt>
                <s.DCnt>
                    <s.DetailTitle>공기압축기 수</s.DetailTitle>
                    <s.Cnt>{team.compressor_count} 개</s.Cnt>
                </s.DCnt>
                <s.DCnt>
                    <s.DetailTitle>직원 수</s.DetailTitle>
                    <s.Cnt>{team.server_count} 명</s.Cnt>
                </s.DCnt>
            </s.DetailMenu>
            <s.ReplaceBtn
                onClick={()=>{
                    Request("post","code",{},{"Authorization": "Bearer "+ window.localStorage.getItem("token")},"팀 코드 변경")
                    window.location.href = "/teammanage"
                }}
            >팀 코드 변경</s.ReplaceBtn>
        </s.Container>
        </>
    )
}

export default TeamManage;