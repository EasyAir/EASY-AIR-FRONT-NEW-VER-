import * as s from './styles'
import {Request} from '../../../HOOKS/axios'

const MemberList=({img,name,phone,email,id})=>{
    const DeleteMember=()=>{
        if(window.confirm(name + "을(를) 내보내시겠습니까?")){
            Request("DELETE","/server/" + id,{},{"Authorization": "Bearer " + window.localStorage.getItem("token")},"직원삭제")
            window.location.href = "/";
        }
    }
    return(
        <s.MemberContainer>
            <img src={img} alt="" />
            <div style={{ flexDirection: "column", display: "flex" }}>
                <s.Name>{name}</s.Name>
                <s.Menu>NAME</s.Menu>
            </div>
            <div style={{ flexDirection: "column", display: "flex"}}>
                <s.Detail>전화 : {phone}    </s.Detail>
                <s.Detail>이메일 : {email}    </s.Detail>
            </div>
            <s.DeleteButton onClick={DeleteMember}>
                내보내기
            </s.DeleteButton>
        </s.MemberContainer>
    )
}

export default MemberList;