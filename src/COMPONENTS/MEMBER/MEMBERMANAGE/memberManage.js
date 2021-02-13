import * as s from './styles'
import { Request } from '../../../HOOKS/axios'
import { useEffect, useState } from 'react'
import Loading from '../../../PUBLIC/loading'
import MemberList from './member'

const MemberManage = () => {
    const [toggle, setToggle] = useState(true)
    const [data, setData] = useState([]);
    useEffect(() => {
        Request("GET", "servers", {}, { "Authorization": "Bearer " + window.localStorage.getItem("token") }, "공장직원")
            .then((e) => {
                console.log(e.servers)
                setData(e.servers)
                setToggle(false)
            })
    }, [])
    const Menu = data.map((e, index) => (<MemberList key={index} id={e.id} name={e.name} img={e.profile} phone={e.phone} email={e.email}></MemberList>))
    return (
        <>
            {(toggle) ? <Loading></Loading> : ""}
            <s.Line></s.Line>
            <s.Container>
                <s.Wrapper>
                    <MemberList></MemberList>
                    {Menu}
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default MemberManage;