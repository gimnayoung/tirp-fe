import { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as types from "../constants/product.constants";
import { useDispatch, useSelector } from "react-redux";
import { productAtion } from '../action/productAtion';
import { useNavigate, useParams } from "react-router-dom";

function ProductAdd({setShowDialog, showDialog, id}) {
  const user= useSelector((state)=>state.user.user);
  const mode= useSelector((state)=>state.product.modalState);
  const editProduct= useSelector((state)=>state.product.detailEditProduct);
  const navigate = useNavigate();
  let fileReader =new FileReader();
  const weatherOptions = ['맑음', '비', '눈', '구름'];
  const dispatch = useDispatch();
  const newFormData= {
    image:[],
    location:"",
    weather:"",
    date:"",
    title:"",
    description:"",
   }
   const [formData,setFormData]=useState(mode ==="new" ? {...newFormData}:editProduct);
   const [seletedImages,setSeletedImages]=useState([]);
   const [nullError,setNullError]=useState("");

   useEffect(()=>{
    if(showDialog){
    if (mode === "edit") {
      setFormData(editProduct);
    }
    else {
      setFormData({...newFormData});
    }
  }
   },[showDialog])
    const handleChange=(e)=>{
        e.preventDefault();
        const { name,value }= e.target;
        setFormData({...formData,[name]:value});
    }
    const handleClickClose=()=>{
        setShowDialog(false);
        dispatch({type:types.PRODUCT_ADD_EDIT_MODAL,payload:""});
    }
    const handleImageChange=(e)=>{
      e.preventDefault();
      const totalSelectedImages = e.currentTarget.files;
      const maxImage= 4;
      let imageLength = totalSelectedImages.length> maxImage ? maxImage : totalSelectedImages.length;
      if (totalSelectedImages.length > maxImage) alert (`업로드 가능한 사진은 최대 ${maxImage}장 까지 입니다.`);
      let newImages = [...seletedImages];
      for (let i = 0; i < imageLength && newImages.length < maxImage; i++) {
        const file = totalSelectedImages[i];
        const imageUrl= URL.createObjectURL(file);
        newImages.push({name:file.name,imgUrl:imageUrl});
      }
     setSeletedImages(newImages);
    }
    const renderFileButtons = () => {
      return seletedImages.map((file, index) => (
          <button key={index} className='deleteButton'onClick={() => removeFile(index)} >
            {file.name}
          </button>
      ));
    };
    const editFileButtons=()=>{
      return formData.image.map((file, index) => (
        <button key={index} className='deleteButton cursor-auto'>
          {file}
        </button>
    ));
    }
    const removeFile = (index) => {
      setSeletedImages(prevFiles => prevFiles.filter((file,i) => i !== index));
    };

    const handleAddSubmit = (e) => {
      e.preventDefault();
      if(!user){navigate('/login')}
      if(mode === "new"){
        if (!formData.location || !formData.weather || !formData.date || !formData.title || !formData.description) {
          alert('모든 필수 입력 필드를 입력하세요.');
          return;
        }
        const imageUrls = seletedImages.map(image => image.imgUrl);
        const updatedFormData = { ...formData, image: imageUrls };
        dispatch(productAtion.createProduct({updatedFormData}))
        setShowDialog(false);
      }
      else {
        dispatch(productAtion.editProduct({formData},editProduct._id,id));
        setShowDialog(false);
      }
    }
  return (
    <Wrap>
    <div className='card' style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
      <ModalHeader>
        {mode==="edit"?<button type="submit" className='button p-3' onClick={handleAddSubmit}>수정</button>:<button type="submit" className='button p-3' onClick={handleAddSubmit}>추가</button> }
          <button className='button p-3 ml-1' onClick={handleClickClose}>닫기</button>
      </ModalHeader>
      <form className='flex flex-col p-1 w-[100%] h-[100%]'>
      <div>
        <Label htmlFor="image">사진 추가</Label>
        <div className='input flex'>
          {mode ==="new" ?renderFileButtons() :editFileButtons() }
          {mode==="new" ? (<> <label className="button h-[auto]" htmlFor="image" multiple >이미지 선택</label></>):""}
         <input accept=".jpg, .png ,image/*" id="image" type="file" multiple onChange={handleImageChange} style={{width:0, height:0, padding:0, overflow:"hidden", border:0}}/>
        </div>
      </div>
        <div>
          <Label htmlFor="location">여행 위치</Label>
          <input required maxLength="20" id= "location" value={formData.location} className='input' placeholder="여행 위치를 입력하세요" name="location" onChange={handleChange}/>
        </div>
        <div>
          <Label htmlFor="weather">여행 날씨</Label>
          <select className='input' name="weather" onChange={handleChange}>
            <option>{mode==="edit" ? formData.weather : "날씨를 선택해주세요"}</option>
            {
              weatherOptions.map((weather, index) => (
                <option required key={index} id="weather" name="weather" value={weather}>{weather}</option>
              ))
            }
          </select>
          <Label htmlFor="date">여행 날짜</Label>
          <input required id="date" value={formData.date}  className='input' name="date" type="date"  onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="title">제목</Label>
          <input required maxLength="20" id="title" value={formData.title} className='input' onChange={handleChange} name="title" placeholder="여행지나 제목을 입력하세요" />
        </div>
        <div>
          <Label htmlFor="description">기록장</Label>
          <input required maxLength="180" id="description" value={formData.description} className='input h-[120px] ver' onChange={handleChange} name="description" placeholder="여행 경험을 간단히 설명해주세요" />
        </div>
      </form>
    </div>
    </Wrap>
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

const Wrap = styled.div`
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`
export default ProductAdd;