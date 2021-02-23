import MemberModal from '../COMPONENTS/CHECK/memberModal'
import * as s from './styles'
import {useContext} from 'react'
import {Context} from '../CONTEXT/provider'

const Modal =()=>{
    const {modalName, contextDispatch} = useContext(Context);
    return(
        <>
        {(modalName === "none")?<></>
        :(modalName === "writer")?<s.Cover 
            onClick={()=>contextDispatch({type:"change",value:"none"})}
        ><MemberModal></MemberModal></s.Cover>
        :<></>}
        </>
    )
}

export default Modal;