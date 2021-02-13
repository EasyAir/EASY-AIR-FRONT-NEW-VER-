import styled from 'styled-components'
import {minWid,color, blue,BackColor} from '../../PUBLIC/index'

export const Line = styled.div`
width:100%;
border-top:1px solid rgb(200,200,200);
margin-top:4%;
`

export const SheetContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color:${BackColor};
`

export const Sheet = styled.div`
width:98%;
height:130px;
border:1px solid #D1D1D1;
margin-top:50px;
box-shadow:4px 4px 10px rgb(30,30,30,0.1);
background-color:white;
border-radius:5px;
`

export const SheetHeader = styled.div`
height:35px;
background-color:#3B4FFF;
display:flex;
align-items:center;
color:white;
padding: 0 20px;
font-weight:500;
font-family:나눔스퀘어;
`

export const CheckMenu = styled.div`
padding: 0 20px;
display:flex;
justify-content:space-between;
margin-top:20px;
align-items:center;
p{
    font-weight:bold;
    font-size:18px;
    cursor:pointer;
    :hover{
        opacity:0.5;
    }
}
a{
    color:gray;
    font-size:13px;
}
`

export const CheckDetail = styled.div`
color:#7D7D7D;
display:flex;
justify-content:space-between;
padding: 0 20px;    
margin-top:12px;
p{
    font-size:16px;
    color:gray;
    cursor:pointer;
    :hover{
        text-decoration:underline;
    }
}
a{
    color:${blue};
    font-weight:bold;
    font-size:17px;
    cursor:pointer;
    :hover{
        opacity:0.5;
    }
}
`

export const ChangeMenu = styled.ul`
width:250px;
display:flex;
margin-top:13px;
font-size:14px;
li{
    list-style:square;
    margin-left:20px;
}
`

export const PartCheck = styled.ul`
padding: 0 20px;
display:flex;
justify-content:space-between;
font-weight:bold;
margin-top:20px;
`

export const Flex = styled.div`
padding: 5px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

export const Date = styled.p`
color:gray;
font-size:13px;
margin-top:10px;
`

export const FlexCont = styled.div`
width:50%;
`

export const MModalContainer = styled.div`
width:500px;
height:270px;
border-radius:10px;
background-color:white;
`

export const MHeader = styled.div`
color:white;
padding:13px 40px;
background-color:${blue};
border-radius: 10px 10px 0 0;
font-size:13px;
`

export const MMain = styled.div`
width:100%;
height:220px;
display:flex;
justify-content:center;
align-items:center;
img{
    width:120px;
    border-radius:80%;
    box-shadow: 3px 3px 10px whitesmoke;
}
`

export const MProfileIntro = styled.div`
display:flex;
flex-direction:column;
padding:0 30px;
p{
    font-size:25px;
    font-weight:bold;
    padding: 10px 0;
    b{
        font-size:14px;
        color:${blue};
        padding:0 3px;
    }
}
a{
    padding: 10px 0;
}
`

export const Cover = styled.div`
width:100%;
height:100%;
position:absolute;
background-color:rgb(10,10,10,0.4);
z-index:300;
display:flex;
justify-content:center;
align-items:center;
min-width:${minWid};
cursor:pointer;
`