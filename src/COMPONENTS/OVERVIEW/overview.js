import * as s from './styles'
import 프로필 from '../../IMG/프로필.png'
import ReplaceSheet from '../CHECK/replaceSheet'
import CheckSheet from '../CHECK/checkSheet'
import MemberList from '../MEMBER/MEMBERMANAGE/member'

const Overview =()=>{
    return(
        <>
            <s.Line />
            <s.Container>
                <s.ProfileBox>
                    <s.ProfileImg src={프로필}></s.ProfileImg>
                    <s.Name>NAME : 정지원</s.Name>
                    <s.Intro>TEAM MANAGER</s.Intro>
                    <s.TeamButton>TEAM 정지원팀</s.TeamButton>
                    <s.TeamDetail>
                        <p><i className="far fa-building"></i> 공장 수 : 0개</p>
                        <p><i className="fas fa-user-check"></i> 직원 수 : 0명</p>
                    </s.TeamDetail>
                </s.ProfileBox>
                <s.ShowBox>
                    <s.DetailBar>
                        <a href="#!"><i className="far fa-chart-bar"></i> 최근에 작성한 교체표</a>
                    </s.DetailBar>
                    <s.FlexContainer>
                        <ReplaceSheet></ReplaceSheet>
                        <ReplaceSheet></ReplaceSheet>
                        <ReplaceSheet></ReplaceSheet>
                    </s.FlexContainer>
                    <s.DetailBar>
                        <a href="#!"><i className="far fa-chart-bar"></i> 최근에 작성한 점검표</a>
                    </s.DetailBar>
                    <s.FlexContainer>
                        <CheckSheet></CheckSheet>
                        <CheckSheet></CheckSheet>
                        <CheckSheet></CheckSheet>
                    </s.FlexContainer>
                    <s.DetailBar>
                        <a href="#!"><i className="far fa-chart-bar"></i> 작업이 가장 임박한 직원</a>
                    </s.DetailBar>
                    <MemberList></MemberList>
                    <MemberList></MemberList>
                    <MemberList></MemberList>
{/*                     <Mmeber></Mmeber>
                    <Mmeber></Mmeber>
                    <Mmeber></Mmeber> */}
                </s.ShowBox>
            </s.Container>
        </>
    )
}

export default Overview;