import styled from 'styled-components'
import {color} from '../../PUBLIC/index'

export const HeaderContainer = styled.header`
width:100%;
height:6%;
background-color:#2B2B27;
box-shadow:0px 3px 3px whitesmoke;
display:flex;
align-items:center;
justify-content:space-between;
min-width:1900px;
`

export const Logo = styled.h1`
color:white;
font-weight:bold;
font-size:2.3vmin;
margin-left:3%;
b{
    color:${color};
}
`

export const Menu = styled.ul`
width:17%;
display:flex;
justify-content:space-between;
color:white;
font-size:1.4vmin;
margin-right:60%;
li{
    cursor: pointer;
    :hover{
        opacity:0.7;
    }
}
`

export const MyMenu = styled.div`
width:10%;
button{
    width:100%;
    background-color:transparent;
    border:none;
    color:white;
    padding:2% 0;
    cursor: pointer;
    font-size:2vmin;
    outline:none;
}
`

export const UnderHeader = styled.header`
width:100%;
height:1.5%;
box-shadow:0px 3px 6px rgb(60,60,60,0.2);
min-width:1800px;
`