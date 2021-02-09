import * as s from './styles'

const CheckSheet =()=>{
    return (
        <s.Sheet>
            <s.SheetHeader>점검표 (check sheet)</s.SheetHeader>
            <s.CheckMenu><p>시리얼넘버 : 40131aasdf</p><a>작성자 : 김팔복</a></s.CheckMenu>
            <s.CheckDetail><p>날짜 : 2020-01-01</p><p>담당자 : 김팔복</p></s.CheckDetail>
        </s.Sheet>
    )
}

const ChangeSheet=()=>{
    return (
        <s.Sheet>
            <s.SheetHeader style={{ backgroundColor: "#FF3B3B" }}>교체표 (change sheet)</s.SheetHeader>
            <s.Flex>
                <s.ChangeMenu>
                    <li>교체 완료</li>
                    <li style={{ color: "red", marginLeft: "30px" }}>교체 안함</li>
                </s.ChangeMenu>
                <s.Date>날찌 : 2020-01-10</s.Date>
            </s.Flex>
            <s.PartCheck>
                <li>PART A</li>
                <li>PART A</li>
                <li>PART A</li>
                <li>PART A</li>
                <li>PART A</li>
                <li>PART A</li>
                <li>PART A</li>
            </s.PartCheck>
        </s.Sheet>
    )
}

const Check=()=>{
    return(
        <>
        <s.Line></s.Line>
        <s.SheetContainer>
            <CheckSheet></CheckSheet>
            <ChangeSheet></ChangeSheet>
            <CheckSheet></CheckSheet>
            <ChangeSheet></ChangeSheet>
            <CheckSheet></CheckSheet>
            <ChangeSheet></ChangeSheet>
        </s.SheetContainer>
        </>
    )
}

export default Check;