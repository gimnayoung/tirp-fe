import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { type } from '@testing-library/user-event/dist/type';
import { productAtion } from '../action/productAtion';

function ProductAdd({mode, setShowDialog, showDialog}) {
  let fileReader =new FileReader();
  const weatherOptions = ['맑음', '비', '눈', '구름'];
  const dispatch = useDispatch();
  const newFormData= {
    image:["url","url2"],
    location:"",
    title:"",
    weather:"",
    date:"",
    description:"",
   }
   const [formData,setFormData]=useState(mode ==="new" ? {...newFormData}:"");
   const [seletedImages,setSeletedImages]=useState([]);
   const [nullError,setNullError]=useState("");
   const totalSeletedImages = {};

    const handleChange=(e)=>{
        e.preventDefault();
        const { id,value }= e.target;
        setFormData({...formData,[id]:value});
    }
    const handleClickClose=()=>{
        setShowDialog(false);
    }
    const handleImageChange=(e)=>{
      e.preventDefault();
      const totalSelectedImages = e.currentTarget.files;
      const maxImage= 4;
      let imageLength = totalSelectedImages.length> maxImage ? maxImage : totalSelectedImages.length;
      if (totalSelectedImages.length > maxImage) alert (`업로드 가능한 사진은 최대 ${maxImage}장 까지 입니다.`);
      let newImages = [...seletedImages];
      for (let i = 0; i < imageLength && newImages.length < maxImage; i++) {
        newImages.push(totalSelectedImages[i].name);
      }
     setSeletedImages(newImages);
    }
useEffect(()=>{
  console.log(seletedImages , '이미지이름들')
},[seletedImages])
    const renderFileButtons = () => {
      return seletedImages.map((file, index) => (
          <button key={index} className='deleteButton'onClick={() => removeFile(file)} >
            {file}
          </button>
      ));
    };
    const removeFile = (fileName) => {
      setSeletedImages(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData, '총데이터');
      if (!formData.location.trim() ||!formData.date.trim() || !formData.weather.trim() || !formData.title.trim() || !formData.description.trim()) {
        return alert("모든 필드를 입력하세요.");
      }
      dispatch(productAtion.createProduct({...formData,image:seletedImages}))

    }

  return (
    <div className='card' style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
      <ModalHeader>
          <button className='button p-3' onClick={handleSubmit}>추가</button>
          <button className='button p-3 ml-1' onClick={handleClickClose}>닫기</button>
      </ModalHeader>
      <form className='flex flex-col p-1 w-[100%] h-[100%]'>
      <div>
        <Label htmlFor="image">사진 추가</Label>
        <div className='input flex'>
          {renderFileButtons()}
         <label className="button h-[auto]" htmlFor="image" multiple >이미지 선택</label>
         <input accept="image/*" id="image" type="file" multiple onChange={handleImageChange} style={{width:0, height:0, padding:0, overflow:"hidden", border:0}}/>
        </div>
      </div>
        <div>
          <Label htmlFor="location">여행 위치</Label>
          <input className='input' placeholder="여행 위치를 입력하세요" id="location" onChange={handleChange}/>
        </div>
        <div>
          <Label htmlFor="weather">여행 날씨</Label>
          <select className='input' id="weather" onChange={handleChange}>
            <option>날씨를 선택하세요</option>
            {
              weatherOptions.map((weather, index) => (
                <option key={index} value={weather}>{weather}</option>
              ))
            }
          </select>
          <Label htmlFor="date">여행 날짜</Label>
          <input className='input' id="date" type="date"  onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="title">제목</Label>
          <input className='input' onChange={handleChange} id="title" placeholder="여행지나 제목을 입력하세요" />
        </div>
        <div>
          <Label htmlFor="description">기록장</Label>
          <input className='input h-[120px] ver' onChange={handleChange} id="description" placeholder="여행 경험을 간단히 설명해주세요" />
        </div>
      </form>
    </div>
  );
}

const ModalHeader=styled.div`
padding: 4px;
display: flex;
align-items: center;
justify-content: end;
height: 64px;
border-bottom:1px black solid;
`
const Label = styled.label`
  font-weight: 600;
  color: #444242;
`;


export default ProductAdd;