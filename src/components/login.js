import styled from 'styled-components';
import React from "react";

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 20rem;
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

const StyledCardContent = styled.div`
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

// const StyledLink = styled(Link)`
//   text-decoration: underline;
// `;

function Login() {
  return (
    <div>
        <StyledCard key="1">
      <StyledCardHeader>
        <StyledCardTitle>로그인</StyledCardTitle>
        <StyledCardDescription>글 내용</StyledCardDescription>
      </StyledCardHeader>
      <StyledCardContent>
        <div>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput id="email" placeholder="이메일을 입력하세요" required type="email" />
        </div>
        <div>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput id="password" required type="password" />
        </div>
        <StyledButton>로그인</StyledButton>
        <StyledOutlineButton>
          구글로 로그인
        </StyledOutlineButton>
        <div className="text-center mt-4">
          {/* <StyledLink href="#">
            회원가입
          </StyledLink> */}
        </div>
      </StyledCardContent>
    </StyledCard>
    </div>
  )
}
export default Login;