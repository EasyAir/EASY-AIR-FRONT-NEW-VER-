import * as s from './styles'
import {Link} from 'react-router-dom'

const Header =()=>{
    return(
        <>
        <s.HeaderContainer> 
            <s.Logo><Link to="/overview" style={{color:"white"}}><b><i className="fas fa-cubes"></i></b> <b>E</b>asy<b>A</b>ir</Link></s.Logo>
            <s.Menu>
                <li><Link style={{color:"white"}} to="/factory">공장관리</Link></li>
                <li><Link style={{color:"white"}} to="/member">직원관리</Link></li>
                <li><Link style={{color:"white"}} to="/check">업무상태  </Link></li>
                <li><Link style={{color:"white"}} to="/teammanage">팀관리</Link></li>
            </s.Menu>
            <s.MyMenu>
                <Link to="/"><button>로그아웃</button></Link>
            </s.MyMenu>
        </s.HeaderContainer>
        </>
    )
}

export default Header;