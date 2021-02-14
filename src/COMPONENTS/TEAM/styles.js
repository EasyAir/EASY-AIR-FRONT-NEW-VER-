import styled from 'styled-components';
import {blue,color} from '../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
min-width:1900px;
`

export const Container = styled.div`
width:100%;
height:70%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
a{
    color:gray;
}
`

export const Title = styled.b`
font-size:33px;
font-weight:bold;
padding: 20px 0;
b{
    color:${color};
}
` 

export const NameInput = styled.input`
width:310px;
height:50px;
margin-top:30px;
border:1px solid rgb(220,220,220);
background-color:rgb(240,240,240);
padding: 0 20px;
font-size:16px;
color:gray;
`

export const Button = styled.button`
width:350px;
height:50px;
margin-top:20px;
background-color:${blue};
border:none;
color:white;
font-size:18px;
font-weight:bold;
`

export const TeamName = styled.p`
font-size:40px;
font-weight:bold;
color:black;
`

export const TeamCode = styled.p`
color:gray;
font-size:20px;
padding:20px 0;
`

export const DetailMenu = styled.div`
width:800px;
height:250px;
margin-top:30px;
display:flex;
`

export const DCnt = styled.div`
width:33%;
height:100%;
border-right:3px solid #BFBFBF;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
:last-child{border:none;}
`

export const DetailTitle = styled.a`
color:#CFCFCF;
font-size:25px;
font-weight:bold;
`

export const Cnt = styled.b`
font-size:50px;
padding:30px 0;
color:black;
font-weight:bold;
font-family:나눔스퀘어;
`

export const ReplaceBtn = styled.button`
width:180px;
height:50px;
margin-top:60px;
background-color:transparent;
border:1px solid black;
font-size:17px;
:hover{
    background-color:black;
    color:white;    
}
`