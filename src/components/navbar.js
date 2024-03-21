import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userActions } from "../action/userAction";
import styled from 'styled-components';
import Logo from "../image/logo.png";

const NavbarWrap = styled.div`
width: 100%;
background-color: #DCEBE1;
height: 80px;
`
const NavbarContents = styled.div`
max-width: 1200px;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const LogoBox= styled.div`
width: 160px;
height: 67px;
cursor: pointer;
`
const LogoImg=styled.img`
width: 100%;
height: 100%;
`
const LoginBox=styled.div`
display: flex;
width: 130px;
justify-content: space-between;
cursor: pointer;
`
function Navber(){
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const user= useSelector((state)=>state.user.user);
    
    const logout=()=>{
       console.log('로그아웃클릭')
        dispatch(userActions.logout());
    }
    return (
        <NavbarWrap>
          <NavbarContents>
            <LogoBox onClick={() => navigate("/")}>
             <LogoImg src={Logo}/>
            </LogoBox>
            <LoginBox>
              {user ?(
                  <LoginBox>
                  <span/>
                  <div onClick={logout}>
                      <span className="font-semibold text-mainColor-color_Black" >Log out</span>
                  </div>
                  </LoginBox>
                ) : (
                  <LoginBox>
                    <div onClick={() => navigate("/login")} >
                      <span className="font-semibold text-mainColor-color_Black">Log in</span> 
                    </div>
                    <div onClick={() => navigate("/signup")}>
                     <span className="font-semibold text-mainColor-color_Black">sign up</span> 
                    </div>
                  </LoginBox>
              )}
            </LoginBox>
            </NavbarContents>
        </NavbarWrap>
    )
}
export default Navber;