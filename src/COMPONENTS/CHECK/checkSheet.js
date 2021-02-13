import * as s from './styles'
import {useContext} from 'react'
import {Context} from '../../CONTEXT/provider'

const CheckSheet =()=>{
    const {contextDispatch} = useContext(Context)
    const writer=()=>{
        contextDispatch({type:"change",value:"writer"})
    }
    return (
        <>
        <s.Sheet>
            <s.SheetHeader>점검표 (check sheet)</s.SheetHeader>
            <s.CheckMenu><p>공장이름 : 호원물산</p><a>2일전</a></s.CheckMenu>
            <s.CheckDetail><p>공기압축기명 : n호기</p><a onClick={writer}>작성자 : 김팔복</a></s.CheckDetail>
        </s.Sheet>
        </>
    )
}

export default CheckSheet;