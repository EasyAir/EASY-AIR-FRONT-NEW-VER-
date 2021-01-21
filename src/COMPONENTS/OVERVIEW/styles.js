import styled from 'styled-components'
import {color} from '../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
min-width:1900px;
`

export const Container = styled.div`
width:100%;
height:80%;
display:flex;
min-width:1900px;
`

export const ProfileBox = styled.div`
width:15%;
height:50%;
margin-left:10%;
margin-top:3%;
display:flex;
flex-direction:column;
align-items:center;
`

export const Name = styled.a`
font-weight:bold;
font-size:19px;
margin-top:30px;
`

export const Intro = styled.a`
font-size:13px;
color:${color};
margin-top:10px;
font-weight:bold;
`

export const ProfileImg = styled.img`
width:230px;
height:230px;
border-radius:80%;
overflow:hidden;
box-shadow:2px 3px 6px whitesmoke;
`

export const TeamButton = styled.button`
width:200px;
height:30px;
border:none;
color:black;
border-radius:24px;
margin-top:60px;
background-color:rgb(250,250,250);
cursor: pointer;
border:1px solid gray;
`

export const ShowBox = styled.div`
width:60%;
height:100%;
overflow-y:scroll;
margin-left:70px;
padding-top:2%;
overflow-x:hidden;
::-webkit-scrollbar{
    display:none;
}
`

export const DetailBar = styled.div`
width:100%;
height:20px;
border-bottom:1px solid rgb(220,220,220);
padding:10px 0;
a{
    color:gray;
    margin-left:20px;
    font-size:13px;
}
`

export const CheckContainer = styled.div`
width:98%;
height:200px;
display:flex;
justify-content:space-between;
margin-top:30px;
padding:0 10px;
`

export const CheckBox = styled.div`
width:30%;
height:100%;
border:1px solid rgb(140,140,140);
border-radius:5px;
box-shadow:2px 3px 3px rgb(100,100,100,0.1);
`

export const BoxTitle = styled.div`
color:#006CE6;
font-weight:bold;
margin-top:40px;
margin-left:30px;
`

export const Date = styled.div`
margin-left:30px;
color:gray;
font-size:13px;
margin-top:8px;
`

export const Writer = styled.div`
margin-left:30px;
color:gray;
margin-top:60px;
font-weight:bold;
font-size:14px;
`

export const ShowButton = styled.button`
width:80px;
height:30px;
background-color:transparent;
border:1px solid gray;
border-radius:3px;
color:gray;
margin-left:230px;
:hover{
    color:black;
    border:1px solid black;
}
`

export const ChangeContainer = styled.div`
margin-top:30px;
width:100%;
height:400px;
display:flex;
flex-direction:column;
align-items:center;
`

export const ChangeBox = styled.div`
width:98%;
height:120px;
border:1px solid rgb(140,140,140);
border-radius:3px;
box-shadow:2px 3px 3px rgb(100,100,100,0.1);
margin-top:30px;
:first-child{
    margin-top:0;
}
`

export const Flex = styled.div`
display:flex;
justify-content:space-between;
padding:0px 30px;
margin-top:25px;
a{
    font-size:13px;
    :first-child{
        color:#006CE6;
        font-size:16px;
        font-weight:bold;
    }
}
ul{
    width:100%;
    display:flex;
    justify-content:space-between;
    font-size:14px;
}
`