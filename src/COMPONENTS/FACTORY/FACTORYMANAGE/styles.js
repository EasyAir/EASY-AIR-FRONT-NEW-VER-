import styled from 'styled-components'
import {blue} from '../../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
min-width:1900px;
`

export const Container = styled.div`
width:100%;
`

export const FactoryContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
padding:50px 0;
min-width:1900px;
`

export const ListTitle = styled.div`
width:80%;
height:30px;
border-bottom:1px solid #BBBBBB;
color:#BBBBBB;
padding:0 10px;
`
export const FactoryBox = styled.div`
width: 640px;
height: 370px;
border:1px solid rgb(150,150,150);
box-shadow:0px 3px 6px rgb(100,100,100,0.3);
border-radius:5px;
overflow:hidden;
display:flex;
flex-direction:column;
margin-top:60px;
:first-child{
    margin-top:10px;
}
:nth-of-type(2){
    margin-top:10px;
}
img{
    border-bottom:1px solid rgb(100,100,100,0.3);
    width:100%;
    height:254px;   
}
`
export const ListIndex = styled.div`
width:1390px;
margin-top:70px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

export const FlexBox = styled.div`
display:flex;
justify-content:space-between;
padding:0 30px;
align-items:center;
margin-top:15px;
`

export const FactoryName = styled.div`
width:160px;
height:36px;
border-radius:24px;
color:gray;
border:1px solid gray;
display:flex;
justify-content:center;
align-items:center; 
`

export const DetainInfor = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
a{
    padding: 5px 0;
}
`

export const Location = styled.a`
font-size:14px;
color:${blue};
`
export const RepName = styled.a`
color:black;
font-size:15px;
`

export const PhoneNum = styled.a`
color:#7E7E7E;
font-size:14px;
`

export const IconBox = styled.div`
width:45px;
height:110px;
display:flex;
flex-direction:column;
justify-content:space-between;
position:absolute;
margin-left:570px;
margin-top:30px;
`

export const Icon = styled.button`
width:45px;
height:45px;
border-radius:80%;
background-color:white;
color:#B5B5B5;
border:none;
font-size:20px;
:hover{
    color:black;
}
`