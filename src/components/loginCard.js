import styled from "styled-components"
import Right from "../image/right.png"

const Wrap = styled.div`
position:  relative;
overflow: hidden;
`
const RightImg= styled.div`
position: absolute;
right: -11px;
`
function LoginCard(){
    return(
        <Wrap className="card"  style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
            <RightImg><img src={Right}/></RightImg>
        </Wrap>
    )
}
export default LoginCard;