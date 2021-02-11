import * as s from './styles'

const ReplaceSheet=()=>{
    return (
        <s.Sheet>
            <s.SheetHeader style={{ backgroundColor: "#3BAAFF" }}>교체표 (replace sheet)</s.SheetHeader>
            <s.Flex>
                <s.ChangeMenu>
                    <li>교체 완료</li>
                    <li style={{ color: "red", marginLeft: "30px" }}>교체 안함</li>
                </s.ChangeMenu>
                <s.Date>3일전</s.Date>
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

export default ReplaceSheet;