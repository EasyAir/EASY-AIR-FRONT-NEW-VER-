import * as s from './styles'
import CheckSheet from './checkSheet'
import ReplaceSheet from './replaceSheet'



const Check=()=>{
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