import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardHeader = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

const CardContent = styled.div`
  padding: 0;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

function ProductAdd({mode, setShowDialog, showDialog}) {
    const [formData,setFormData]=useState({
        sku:"",
        image:"",
        location:"",
        title:"",
        date:"",
        description:"",
        isDeleted:""
    })
    const handleChange=(e)=>{
        e.preventDefault();
        const { id,value }= e.target;
        setFormData({...formData,[id]:value});
    }
    const handleClickClose=()=>{
        setShowDialog(false);
    }
  return (
    <Wrapper>
      <CardWrapper>
        <CardHeader>
          <CardTitle>내 여행 기록</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="photo">사진 추가</Label>
                <Input accept="image/*" id="photo" type="file" />
              </div>
              <div className="flex justify-end">
                <Button>사진 업로드</Button>
              </div>
              <div>
                <Img
                  alt="Uploaded Photo"
                  src="/placeholder.svg"
                />
              </div>
              <div>
                <Label htmlFor="location">여행 위치</Label>
                <Input id="location" placeholder="여행 위치를 입력하세요" />
              </div>
              <div className="flex justify-end">
                <Button>추가</Button>
              </div>
              <div>
                <Label htmlFor="title">제목</Label>
                <Input onChange={handleChange} id="title" placeholder="여행지나 제목을 입력하세요" />
              </div>
              <div>
                <Label htmlFor="date">날짜</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="description">설명</Label>
                <Textarea onChange={handleChange} id="description" placeholder="여행 경험을 간단히 설명해주세요" />
              </div>
              <div className="flex justify-end">
                <Button>저장</Button>
                <Button onClick={handleClickClose}>닫기</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </CardWrapper>
    </Wrapper>
  );
}

export default ProductAdd;