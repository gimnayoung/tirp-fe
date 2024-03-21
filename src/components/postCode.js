import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const PostCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

  // 우편번호 모달 열기
  const handleOpenPostcode = () => {
    setIsOpen(true);
  };

  // 우편번호 검색 결과 처리
  const handleComplete = (data) => {
    setAddress(data.address); // 선택한 주소를 상태에 저장
    setIsOpen(false); // 모달 닫기
  };

  return (
    <div>
      {/* 주소 입력란 */}
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      
      {/* 우편번호 검색 버튼 */}
      <button onClick={handleOpenPostcode}>우편번호 검색</button>
      
      {/* 우편번호 검색 모달 */}
      {isOpen && <DaumPostcode onComplete={handleComplete} autoClose />}
    </div>
  );
};

export default PostCode;