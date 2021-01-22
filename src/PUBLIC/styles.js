import styled from 'styled-components'

export const Loading = styled.div`
width:100%;
height:100%;
position:absolute;
background-color:rgb(0,0,0,0.7);
z-index:33;
display:flex;
justify-content:center;
align-items:center;
position:fixed;
`

export const LoadingBar = styled.div`
width:4%;
height:1%;
color:black;
position:absolute;
display:flex;
justify-content:flex-start;
`

export const LoadingBarCont = styled.div`
width:25%;
height:40%;
background-color:skyblue;
border-radius:24px;
transition:0.05s;
opacity:0.7;
`

export const LoadingText = styled.div`
position:absolute;
color:white;
margin-top:6%;
`