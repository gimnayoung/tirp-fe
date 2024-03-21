import styled from 'styled-components';
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {userActions} from "../action/userAction";
import { useNavigate } from "react-router-dom";
import Right from "../image/right.png"

function SignUp() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        email:"",
        name:"",
        password:"",
        confirmPassword:"",
    });
    const [passwordError,setPasswordError]=useState('');

    const handleChange=(e)=>{
        e.preventDefault();
        const { id,value }= e.target;
        setFormData({...formData,[id]:value});
    }

    const register=(e)=>{
        e.preventDefault();
        const {name,email,password,confirmPassword}= formData;
        if(password !== confirmPassword) {
            setPasswordError("비밀번호가 일치하지 않습니다.");
            return;
        }
        setPasswordError("");
        dispatch(userActions.signUpUser({email,password,name},navigate));
    }
  return (
    <Wrap className='card' style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
      <RightImg><img src={Right}/></RightImg>
      <TitleHeader>
        <Title>Sign up</Title>
        <div>계정을 만들려면 정보를 입력하세요.</div>
      </TitleHeader>
      <form className='p-1'>
        <div>
          <Label htmlFor="name">이름</Label>
          <input className='input'  
          onChange={handleChange}
          id="name" placeholder="이름을 입력하세요" required />
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <input className='input'  
          onChange={handleChange}
          id="email" placeholder="이메일을 입력하세요" required type="email" />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <input className='input'  
          onChange={handleChange}
          id="password" required type="password" placeholder="비밀번호를 입력하세요"  />
        </div>
        <div>
          <Label htmlFor="confirmPassword">비밀번호 재확인</Label>
          <input className='input' 
          isInvalid={passwordError}
          onChange={handleChange}
          id="confirmPassword" required type="password"  placeholder="비밀번호 재확인"/>
          {passwordError}
        </div>
        <div className='flex flex-col h-[90px] justify-between '>
          <button className='button w-[100%] h-[40px]'  onClick={register}>가입하기</button>
          <button className='button w-[100%] h-[40px]' variant="outline" >구글로 회원가입</button>
        </div>
      </form>
    </Wrap>
  );
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
margin-top: 60px;
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
export default SignUp;