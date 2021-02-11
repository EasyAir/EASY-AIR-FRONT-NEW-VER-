import * as s from './styles'

const CheckSheet =()=>{
    return (
        <s.Sheet>
            <s.SheetHeader>점검표 (check sheet)</s.SheetHeader>
            <s.CheckMenu><p>공장이름 : 호원물산</p><a>2일전</a></s.CheckMenu>
            <s.CheckDetail><p>공기압축기명 : n호기</p><a>담당자 : 김팔복</a></s.CheckDetail>
        </s.Sheet>
    )
}

export default CheckSheet;