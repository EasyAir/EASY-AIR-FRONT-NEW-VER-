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