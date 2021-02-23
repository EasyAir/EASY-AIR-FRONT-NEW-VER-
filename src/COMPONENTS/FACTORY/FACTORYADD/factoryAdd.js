import {Request} from '../../../HOOKS/axios'
import * as s from './styles'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const FactoryAdd =()=>{
    const [data, setData] = useState({
        name: "",
        location: "",
        repName:"",
        repPhone:"",
        repLv:""
    })
    const InputInfor =(e)=>{
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
        console.log(data)
    }

    const SubData=()=>{
        Request("POST","clients",{"name" : data.name,"location" : data.location,"repr_name" : data.repName,"repr_phone" : data.repPhone,"repr_title" : "대표 직함"},{"Authorization": "Bearer " + window.localStorage.getItem("token"),"Content-Type": "application/json"},"공장등록")  
    }
    return(
        <>
        <s.Line></s.Line>
        <s.Container>
            <s.Title><b>E</b>ASY <b>A</b>IR 공장 등록</s.Title>
            <s.SubTitle>팀에 공장을 추가합니다.</s.SubTitle>
            <s.Input placeholder="공장명을 입력하세요." name="name" onChange={InputInfor}></s.Input>
            <s.Input placeholder="공장 주소를 입력하세요."name="location"onChange={InputInfor}></s.Input>
            <s.Input placeholder="대표명을 입력하세요."name="repName"onChange={InputInfor}></s.Input>
            <s.Input placeholder="대표 전화번호를 입력하세요."name="repPhone"onChange={InputInfor}></s.Input>
            <s.Input placeholder="대표 직함을 입력하세요."name="repLv"onChange={InputInfor}></s.Input>
            <Link to="factory"><s.SubButton onClick={SubData}>등록하기</s.SubButton></Link>
        </s.Container>
        </>
    )
}

export default FactoryAdd;