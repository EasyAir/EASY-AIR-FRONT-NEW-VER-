import * as s from './styles'
import {useEffect} from 'react'
import { Request } from '../../../HOOKS/axios'

const FactoryComp =({match})=>{
    useEffect(()=>{
        console.log(match.params.id)
        Request("get",`client/${match.params.id}/compressors`,{},{"Authorization": "Bearer " + window.localStorage.getItem("token")},"공기압축기 정보")
    })
    return(
        <s.Container>
            <s.Table>
                <tbody>
                    <tr>
                        <td>모델명</td>
                        <td>시리얼 넘버</td>
                        <td>담당자명</td>
                        <td>고유번호</td>
                        <td>제조사</td>
                        <td>일일 가동시간</td>
                        <td>연간 조업일</td>
                        <td>최근 점검일자</td>
                    </tr>
                    <tr>
                        <td>A123_II</td>
                        <td>a13213b213</td>
                        <td>정지원</td>
                        <td>12301230880123</td>
                        <td>삼성전자</td>
                        <td>3시간</td>
                        <td>5일</td>
                        <td>2020-12-11</td>
                    </tr>
                </tbody>
            </s.Table>
        </s.Container>
    )
}

export default FactoryComp;