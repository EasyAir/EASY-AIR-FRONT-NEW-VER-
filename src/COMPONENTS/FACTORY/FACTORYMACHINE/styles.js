import styled from 'styled-components'
import {minWid} from '../../../PUBLIC/index'

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
min-width:${minWid};
`

export const Table = styled.table`
width:1600px;
margin-top:130px;
margin-bottom:100px;
border-radius:7px 7px 0 0 ;
overflow:hidden;
td,th{
    padding:25px 45px;
}
tr {
    background-color:#F1F1F1;
    color:gray;
    :nth-of-type(1){
        background-color:#3A3B46;
        font-size:15px;
        color:white;
    }
    :nth-of-type(2n){
        background-color:#FBFBFB;
    }
}
`