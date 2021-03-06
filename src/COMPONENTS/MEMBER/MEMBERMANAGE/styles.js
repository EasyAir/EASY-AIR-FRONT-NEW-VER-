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
min-width:1900px;
display:flex;
align-items:center;
flex-direction:column;
`

export const Wrapper = styled.div`
width:1200px;
`

export const MemberContainer = styled.div`
background-color:white;
width:98%;
height:90px;
margin-left:1%;
border-radius:10px;
border:1px solid #D1D1D1;
box-shadow:2px 3px 5px rgb(50,50,50,0.1);
margin-top:40px;
display:flex;
align-items:center;
img{
    width:50px;
    border-radius:80%;
    margin-left:50px;
    box-shadow:2px 2px 3px whitesmoke;
}
`

export const Name = styled.a`
margin-top:5px;
font-size:20px;
font-weight:bold;
color:black;
margin-left:15px;
`

export const Detail = styled.a`
width:300px;
font-size:14px;
color:black;
margin-left:220px;
padding:1px 0;
color:gray;
`

export const DeleteButton = styled.button`
width:8%;
height:30px;
border:1px solid tomato;
background-color:transparent;
color:tomato;
margin-left:23%;
font-size:1.3vmin;
:hover{
    background-color:tomato;
    color:white;
}
`

export const Menu = styled.a`
color:${blue};
margin-left:17px;
font-size:11px;
padding:2px 0;
`