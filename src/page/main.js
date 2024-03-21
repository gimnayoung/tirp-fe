import React from 'react';
import Top from "../image/top.png";
import Bottom from "../image/bottom.png";
import Left from "../image/left.png";
import Right from "../image/right.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #DCEBE1;
  box-shadow: 4px 4px 0px 5px rgba(161, 148, 148, 0.9);
`;

const TopImg = styled.div`
  position: absolute;
  left: 0;
  margin: 4px;
`;

const RightImg = styled.div`
  position: absolute;
  right: -11px;
`;

const LeftImg = styled.div`
  position: absolute;
  left: -42px;
  bottom: -9px;
`;

const BottomImg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  margin: 4px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -40%);
`;

function Main() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  return (
    <Card className='card'>
      <TopImg><img src={Top} alt="Top Image" /></TopImg>
      <RightImg><img src={Right} alt="Right Image" /></RightImg>
      <LeftImg><img src={Left} alt="Left Image" /></LeftImg>
      <BottomImg><img src={Bottom} alt="Bottom Image" /></BottomImg>
      <TextBox>
        <div className="text-3xl">나만의 <span className="font-black text-mainColor-color_Black">여행 기록</span>을 작성해보세요.</div>
        <button onClick={() => navigate(user ? "/trip" : "/login")} className='button h-11 p-2 bg-mainColor-color_Ivory m-4'>
          기록 작성하러 가기
        </button>
      </TextBox>
    </Card>
  );
}

export default Main;