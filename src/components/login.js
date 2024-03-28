import styled from 'styled-components';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { userActions } from '../action/userAction';
import { GoogleLogin } from '@react-oauth/google';
import Right from "../image/right.png"

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate= useNavigate();
  const dispatch=useDispatch();
  const user= useSelector((state)=>state.user.user);

  const loginWithEmail=(e)=>{
    e.preventDefault();
    dispatch(userActions.loginWithEmail({email,password},navigate));
  }
  const handleGoogleLogin= async(googleData)=>{
    //googleData= clientId, credential, select_by
    dispatch(userActions.loginWithGoogle(googleData.credential,navigate))
  }
  if(user){
    navigate('/trip');
  }
  return (
      <Wrap className='card' style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
      <RightImg><img src={Right}/></RightImg>
      <TitleHeader>
        <Title>Log in</Title>
      </TitleHeader>
      <form className='p-1'>
        <div>
          <Label className='' htmlFor="email">이메일</Label>
          <input className='input'  onChange={(e)=>{ setEmail(e.target.value)}}  id="email" placeholder="이메일을 입력하세요" required type="email" />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <input className='input'   onChange={(e)=>{ setPassword(e.target.value)}} id="password" placeholder="비밀번호를 입력하세요" required type="password" />
        </div>
        <div className='flex flex-col h-[150px] justify-between mt-12'>
          <button className='button w-[100%] h-[40px]' onClick={loginWithEmail}>로그인</button>
          <button className='button w-[100%] h-[40px]' onClick={()=>{navigate('/signup')}}>회원가입</button>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log('Login Failed');
            }}
          />   
        </div>
      </form>
    </Wrap>
  )
}

const Label = styled.label`
  font-weight: 600;
  color: #444242;
`;
const Title=styled.h1`
font-size: 3rem;
font-weight: 700;
color: #80BD95;
-webkit-text-stroke: 1px black;
`
const TitleHeader =styled.div`
margin-top: 77px;
text-align: center;
`
const Wrap = styled.div`
position:  relative;
overflow: hidden;
`
const RightImg= styled.div`
position: absolute;
right: -11px;
`
export default Login;