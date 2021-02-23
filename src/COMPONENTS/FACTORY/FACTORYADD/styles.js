import styled from "styled-components"
import {color, blue, minWid} from '../../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
min-width:${minWid};
position:absolute;
`

export const Container = styled.div`
width:100%;
height:86%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const Title = styled.a`
font-size:33px;
color:black;
font-weight:bold;
b{
    color:${color};
}
`

export const SubTitle = styled.a`
font-size:17px;
color:gray;
margin-top:20px;
margin-bottom:20px;
`

export const Input = styled.input`
width:360px;
height:50px;
padding:0 20px;
border-radius:3px;
background-color:rgb(100,100,100,0.02);
border:1px solid rgb(100,100,100,0.3);
margin-top:13px;
`

export const SubButton = styled.button`
width:400px;
height:50px;
margin-top:30px;
border:none;
background-color:${blue};
color:white;
font-size:18px;
font-weight:bold;
`