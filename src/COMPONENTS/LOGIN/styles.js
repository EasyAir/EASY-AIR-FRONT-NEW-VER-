import styled from 'styled-components'
import {color,minWid} from '../../PUBLIC/index'

export const Background = styled.div`
width:100%;
height:100vh;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-size:cover;
min-width:${minWid};
position:absolute;
z-index:200;
`

export const Title = styled.a`
font-size:4.4vmin;
color:black;
font-weight:bold;
b{
    color:${color};
}
`

export const SubTitle = styled.a`
font-size:1.4vmin;
color:black;
font-weight:bold;
margin-top:16px;
`

export const KakaoBox = styled.div`
width:12%;
height: 54px;
/* background-color:#FAE100; */
margin-top:40px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center; 
overflow:hidden;
img{
    width:100%;
    object-fit:cover;
    cursor: pointer;
}
`

export const MenuBar = styled.div`
width:130px;
height:200px;
position:absolute;
right:0;
display:flex;
flex-direction:column;
justify-content:space-between;
`

export const MenuCircle= styled.div`
width:40px;
height:40px;
border-radius:80%;
border:2px solid gray;
cursor: pointer;
transition:0.5s;
margin-left:10px;
display:flex;
justify-content:center;
align-items:center;
color:gray;
:hover{
    margin-left:0px;
    color:black;
    border:2px solid black;
}
`

export const Made = styled.a`
font-size:1.2vmin;
color:gray;
position:absolute;
margin-top:44%;
`