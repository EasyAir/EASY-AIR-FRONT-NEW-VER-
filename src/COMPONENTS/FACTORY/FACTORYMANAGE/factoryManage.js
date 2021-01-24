import * as s from './styles'
import {Link} from 'react-router-dom'
import {Request} from '../../../HOOKS/axios'
import {useEffect, useState} from 'react'
import Loading from '../../../PUBLIC/loading'

const FactoryList =({name, location, phone, rep,pro,id})=>{
    const FDelete=()=>{
        if(window.confirm(name + " 을(를) 삭제하시겠습니까?"))
        Request("DELETE","client/" + id,{},{"Authorization": "Bearer " + window.localStorage.getItem("token")},"공장삭제")
        setTimeout(()=>{
            window.location.href = window.location.href;
        },1000)
    }
    return(
        <>
                <s.FactoryBox>
                    <s.IconBox>
                        <Link to="/factory"><s.Icon onClick={FDelete}><i className="fas fa-trash-alt"></i></s.Icon></Link>
                        <Link to=""><s.Icon><i className="fas fa-pencil-alt"></i></s.Icon></Link>
                    </s.IconBox>
                    <img src="https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg" /* {pro} */ alt="" />
                    <s.FlexBox>
                        <s.FactoryName>{name}</s.FactoryName>
                        <s.DetainInfor>
                            <s.Location>공장 주소 : {location}</s.Location>
                            <s.RepName>대표명 : {rep}</s.RepName>
                            <s.PhoneNum>전화 : {phone}</s.PhoneNum>
                        </s.DetainInfor>
                    </s.FlexBox>
                </s.FactoryBox>
        </>
    )
}

const FactoryMange =()=>{
    const [obj, setObj] = useState([]);
    const [load,SetLoad] = useState(true)
    useEffect(()=>{
        Request("GET", "/clients", {}, {"Authorization": "Bearer " + window.localStorage.getItem("token")}, "공장 정보")
        .then((e)=>{
            console.log(e)
            setObj(e.clients);
            console.log(e.clients)
            SetLoad(false) 
        })
    },[]) 
    const Factory = obj.map((e,index)=>(<FactoryList id={e.id} key={index} name={e.name} location={e.location} phone={e.repr_phone} rep={e.repr_name} pro={e.profile}></FactoryList>)) 
    return(
        <>
        {(load)?<Loading></Loading>:""}
        <s.Container>
        <Link to="addfactory"><s.AddFactoryButton>공장추가</s.AddFactoryButton></Link>
            <s.Line></s.Line>
            <s.FactoryContainer>
                <s.ListTitle><i className="fas fa-industry"></i> 전체 공장 목록</s.ListTitle>
                <s.ListIndex>
                    {Factory} 
                </s.ListIndex>
            </s.FactoryContainer>
        </s.Container>
        </>
    )
}

export default FactoryMange;