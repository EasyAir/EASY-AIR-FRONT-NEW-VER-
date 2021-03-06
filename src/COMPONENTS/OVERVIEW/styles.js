import styled from 'styled-components'
import { blue, minWid} from '../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
`

export const Container = styled.div`
width:100%;
height:80%;
display:flex;
min-width:${minWid};
`

export const ProfileBox = styled.div`
width:15%;
margin-left:10%;
margin-top:3%;
display:flex;
flex-direction:column;
`

export const Name = styled.p`
font-weight:600;
font-size:20px;
margin-top:30px;
margin-left:20px;
`

export const Intro = styled.p`
font-size:15px;
color:${blue};
margin-top:10px;
margin-left:20px;
`

export const ProfileImg = styled.img`
width:260px;
height:260px;
border-radius:80%;
overflow:hidden;
box-shadow:2px 3px 6px whitesmoke;
margin-top:50px;
`

export const TeamButton = styled.button`
width:220px;
height:35px;
border:none;
color:gray;
border-radius:3px;
margin-top:20px;
background-color:rgb(250,250,250);
cursor: pointer;
border:1px solid #D1D1D1;
margin-left:20px;
`

export const TeamDetail = styled.div`
width:220px;
margin-left:20px;
display:flex;
justify-content:space-between;
margin-top:30px;
font-size:13px; 
color:#9B9B9B;
`

export const ShowBox = styled.div`
padding: 0 3% 0 0;
width:60%;
height:100%;
overflow-y:scroll;
margin-left:70px;
padding-top:2%;
overflow-x:hidden;
     ::-webkit-scrollbar{
        width:5px;
        background-color:rgb(240,240,240);
    } 
    ::-webkit-scrollbar-thumb{
        background-color:skyblue;
    }
`

export const DetailBar = styled.div`
width:100%;
height:20px;
border-bottom:1px solid rgb(220,220,220);
padding:10px 0;
margin-top:30px;
:nth-of-type(1){
    margin-top:0;
}
a{
    color:gray;
    margin-left:20px;
    font-size:13px;
}
`

export const FlexContainer = styled.div`
position:relative;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`

export const MemberBox = styled.div`
background-color:white;
width:97%;
height:11%;
border:1px solid rgb(140,140,140);
margin-top:30px;
border-left:7px solid ${blue};
display:flex;
margin-left:1%;
align-items:center;
box-shadow:2px 3px 3px rgb(100,100,100,0.1);
img{
    width:40px;
    height:40px;
    object-fit:contain;
    border-radius:80%;
    box-shadow:3px 3px 3px whitesmoke;
    margin-left:30px;
}
div{
    display:flex;
    flex-direction:column;
    margin-left:3%;
    :nth-of-type(2){
        margin-left:30%;
    }
    a{
        color:gray;
        :nth-of-type(2){
            color:${blue};
            font-size:13px;
        }
    }
}
`