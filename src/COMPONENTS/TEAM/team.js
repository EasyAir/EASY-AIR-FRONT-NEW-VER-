import * as s from './styles'
import {useState} from 'react'
import {Request} from '../../HOOKS/axios'

const Team=()=>{
    const [val,setVal] = useState('');
    const InputVal =(e)=>{
        setVal(e.target.value);
    }
    const SubVal=()=>{
        Request('post','team',{"name" : val}, {"Authorization": "Bearer " + window.localStorage.getItem('token'), "Content-Type": "application/json"},"팀 생성")
    }
    return(
        <>
        <s.Line></s.Line>
        <s.Container>
            <s.Title><b>E</b>ASY <b>A</b>IR MAKE TEAM</s.Title>
            <a>팀이 없습니다. 팀을 생성해주세요!</a>
            <s.NameInput placeholder="사용할 팀명을 입력하세요." onChange={InputVal}></s.NameInput>
            <s.Button onClick={SubVal}>팀 생성하기</s.Button>
        </s.Container>
        </>
    )
}

export default Team;