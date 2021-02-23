import * as s from './styles'
import 프로필 from "../../IMG/프로필.png"

export default function MemberModal(){
    return(
        <s.Cover>
            <s.MModalContainer>
                <s.MHeader>직원 프로필</s.MHeader>
                <s.MMain>
                    <img src={프로필} alt="" />
                    <s.MProfileIntro>
                        <p>정지원<b>TEAM 지원공장</b></p>
                        <a href="#!">email : jidole041241@navr.com</a>
                        <a href="#!">phone : 010 2813 2732</a>
                    </s.MProfileIntro>
                </s.MMain>
            </s.MModalContainer>
        </s.Cover>
    )
}