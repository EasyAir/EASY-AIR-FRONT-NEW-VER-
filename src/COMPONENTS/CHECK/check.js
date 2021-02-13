import * as s from './styles'
import CheckSheet from './checkSheet'
import ReplaceSheet from './replaceSheet'
import { useEffect } from 'react'
import { Request } from '../../HOOKS/axios'

const Check=()=>{
    useEffect(()=>{
        Request(`/compressor/{compressor}/replacesheets`)
    })
    return(
        <>
        <s.Line></s.Line>
        <s.SheetContainer>
            <s.FlexCont>
                <CheckSheet></CheckSheet>
                <ReplaceSheet></ReplaceSheet>
                <CheckSheet></CheckSheet>
                <ReplaceSheet></ReplaceSheet>
                <CheckSheet></CheckSheet>
                <ReplaceSheet></ReplaceSheet>
                <CheckSheet></CheckSheet>
                <ReplaceSheet></ReplaceSheet>  
            </s.FlexCont>
        </s.SheetContainer>
        </>
    )
}

export default Check;