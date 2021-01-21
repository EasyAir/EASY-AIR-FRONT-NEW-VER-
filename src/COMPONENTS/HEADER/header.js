import * as s from './styles'

const Header =()=>{
    return(
        <>
        <s.HeaderContainer>
            <s.Logo><b><i className="fas fa-cubes"></i></b> <b>E</b>asy<b>A</b>ir</s.Logo>
            <s.Menu>
                <li>공장관리</li>
                <li>직원관리</li>
                <li>점검필요</li>
                <li>팀관리</li>
            </s.Menu>
            <s.MyMenu>
                <button><i className="fas fa-sign-out-alt"></i> {/* 로그아웃 */}</button>
            </s.MyMenu>
        </s.HeaderContainer>
{/*         <s.UnderHeader></s.UnderHeader> */}
        </>
    )
}

export default Header;