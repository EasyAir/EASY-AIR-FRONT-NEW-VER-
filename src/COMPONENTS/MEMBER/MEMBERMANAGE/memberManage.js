import * as s from './styles'
import 프로필 from '../../../IMG/프로필.png'
import {Request} from '../../../HOOKS/axios'
import {useEffect,useState} from 'react'
import Loading from '../../../PUBLIC/loading'

const MemberList=({img,name,phone,email,id})=>{
    const DeleteMember=()=>{
        if(window.confirm(name + "을(를) 내보내시겠습니까?")){
            Request("DELETE","/server/" + id,{},{"Authorization": "Bearer " + window.localStorage.getItem("token")},"직원삭제")
            window.location.href = window.location.href;
        }
    }
    return(
        <s.MemberContainer>
            <img src={img} alt="" />
            <div style={{ flexDirection: "column", display: "flex" }}>
                <s.Name>{name}</s.Name>
                <s.Menu>NAME</s.Menu>
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
                <s.Detail>전화 : {phone}    </s.Detail>
                <s.Detail>이메일 : {email}    </s.Detail>
            </div>
            <s.DeleteButton onClick={DeleteMember}>
                내보내기
            </s.DeleteButton>
        </s.MemberContainer>
    )
}

const MemberManage=()=>{
    const [toggle,setToggle] = useState(true)
    const [data,setData] = useState([]);
    useEffect(()=>{
        Request("GET","servers",{},{"Authorization": "Bearer " + window.localStorage.getItem("token")},"공장직원")
        .then((e)=>{
            console.log(e.servers)
            setData(e.servers)
            setToggle(false)
        })
    },[])
    const Menu=data.map((e,index)=>(<MemberList key={index} id={e.id} name={e.name} img={e.profile} phone={e.phone} email={e.email}></MemberList>))
    return(
        <>
        {(toggle)?<Loading></Loading>:""}
        <s.Line></s.Line>
        <s.Container>
            {Menu}
        </s.Container>
        </>
    )
}

export default MemberManage;