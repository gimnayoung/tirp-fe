import styled from 'styled-components';
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {userActions} from "../action/userAction";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  width: 100%;
  max-width: 22.5rem; /* 변경: max-w-360 대신 max-width 사용 */
  margin: 0 auto;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
`;

const StyledCardHeader = styled.div`
  text-align: center;
`;

const StyledCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledCardDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
`;

const StyledCardContent = styled.form`
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > div {
    margin-bottom: 0.5rem;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: #4299e1;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }
`;

const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid #4299e1;
  background-color: transparent;
  color: #4299e1;

  &:hover {
    color: #2b6cb0;
  }
`;

const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #4299e1;
  }
`;

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
    <StyledCard key="2">
      <StyledCardHeader>
        <StyledCardTitle>회원가입</StyledCardTitle>
        <StyledCardDescription>계정을 만들려면 정보를 입력하세요.</StyledCardDescription>
      </StyledCardHeader>
      <StyledCardContent onClick={register}>
        <div>
          <StyledLabel htmlFor="name">이름</StyledLabel>
          <StyledInput 
          onChange={handleChange}
          id="name" placeholder="이름을 입력하세요" required />
        </div>
        <div>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput 
          onChange={handleChange}
          id="email" placeholder="이메일을 입력하세요" required type="email" />
        </div>
        <div>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput 
          onChange={handleChange}
          id="password" required type="password" placeholder="비밀번호를 입력하세요"  />
        </div>
        <div>
          <StyledLabel htmlFor="confirmPassword">비밀번호 재확인</StyledLabel>
          <StyledInput
          isInvalid={passwordError}
          onChange={handleChange}
          id="confirmPassword" required type="password"  placeholder="비밀번호 재확인"/>
          {passwordError}
        </div>
        <StyledButton>가입하기</StyledButton>
        <StyledButton variant="outline" >구글로 회원가입</StyledButton>
        <div>
          {/* <Link href="#">
            <StyledLink>이미 계정이 있으신가요? 로그인</StyledLink>
          </Link> */}
        </div>
      </StyledCardContent>
    </StyledCard>
  );
}

export default SignUp;