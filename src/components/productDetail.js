import React, { useEffect, useState } from 'react';
import Jeju from"../image/jeju.jpg"
import Rain from "../image/rain.png"
import One from "../image/cloud.png"
import Two from "../image/snow.png"
import Three from "../image/sun.png"
import * as types from "../constants/product.constants";
import { IoArrowBack } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import ProductAdd from './productAdd';
import { productAtion } from '../action/productAtion';

function ProductdDetail(){
  const [name,setName]=useState('')
    const [loading, setLoading] = useState(true); // loading 상태 추가
    const productList= useSelector((state)=>state.product.productList);
    const editProduct= useSelector((state)=>state.product.detailEditProduct);
    const user= useSelector((state)=>state.user.user);
    const [seletedArry,setSeletedArry] =useState([])
    const mode= useSelector((state)=>state.product.modalState);
    const [showDialog,setShowDialog] =useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(productAtion.getProductList())
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error fetching product list:", error);
          setLoading(false);
        });
    }, [dispatch]);
    useEffect(() => {
      if (productList.length > 0) {
        const itemsArray = productList.map((item) => item.items).flat();
        const findId = itemsArray.filter((item, index) => index.toString() === id.toString());
        setSeletedArry(findId);
      }
    }, [productList, id]);
    useEffect(()=>{
      if (user){
        setName(user.name)
      }
    },[user])
    const slides = [
        { id: 1, src: Jeju, alt: 'Slide 1' },
        { id: 2, src: Rain, alt: 'Slide 2' },
        // 추가 이미지는 필요한 만큼 여기에 추가
      ];
    const [slideIndex, setSlideIndex] = useState(0);
    const prevSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    const nextSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    // const NewArray =()=>{
    //     const itemsArray = productList.map(item => item.items).flat();
    //     const findId= itemsArray.filter((item, index) =>index.toString() === id.toString());
    //     setSeletedArry(findId);
    // }
    const openEditForm=(product)=>{
      setShowDialog(true);
      dispatch({type:types.PRODUCT_PUT_DETAIL_SELECTED, payload: product});
      dispatch({type:types.PRODUCT_ADD_EDIT_MODAL,payload:"edit"});
    }
    const deleteItem = (productId) => {
      dispatch(productAtion.deleteProduct())
    };
    return(
        <>
        {
            seletedArry?.map((item,index)=>(
                <div key={item._id} className="card " style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
                <div className='flex p-1 h-[64px] items-center relative'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-mainColor-color_Black'>{name}님의 Trip Log</div>
                </div>
                <div className=" w-[100%] flex items-center justify-end p-1">
                    <div className="button mr-auto w-10 h-7 bg-mainColor-color_Ivory flex justify-center" onClick={()=>{navigate('/trip')}}><IoArrowBack/></div>
                    <div className="flex">
                        <div className="button  w-12 h-7" onClick={() => openEditForm(item)}>수정</div>
                        <div className="button  w-12 h-7 ml-1" onClick={()=>deleteItem(item._id)}>삭제</div>
                    </div>
                </div>
                <div className="text-[12px] p-1">{item.location}</div>
                <div className="w-[100%] h-[255px] relative border border-black">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`w-full flex-shrink-0 ${index === slideIndex ? 'block' : 'hidden'}`}>
                        <img src={slide.src} alt={slide.alt} className="w-[100%] h-[255px]" />
                    </div>
                ))}
                  <button className="photoCard-button" onClick={prevSlide}><GrFormPrevious/></button>
                  <button className="photoCard-button right-0" onClick={nextSlide}><GrFormNext/></button>
                </div>
                <div className="flex items-center mt-1">
                    <div className="text-[12px] p-1 ">{item.date}</div>
                    <div className="w-[25px] h-[20px]">
                        {item.weather ==='구름' ? (
                            <img className="w-[100%] h-[100%]" src={One}/>
                          ) : item.weather ==='비' ? (
                            <img className="w-[100%] h-[100%]" src={Rain}/>
                          ) :  item.weather ==='눈' ? (
                            <img className="w-[100%] h-[100%]" src={Two}/>
                          ) : (
                            <img className="w-[100%] h-[100%]" src={Three}/>
                          )}
                    </div>
                </div>
                <div className="h-[140px]">
                    <div className="text-[14px] p-1 textff text-mainColor-color_Gray">{item.title}</div>
                    <div className="text-[14px] p-1 textff text-mainColor-color_Gray">{item.description}</div>
                </div>
                <div className="text-[12px] p-1 float-right">작성날짜: 4566년 10월 5일</div>
            </div>
            ))
        }
         {
          showDialog && ( <><ProductAdd id={id} setShowDialog ={setShowDialog} showDialog= {showDialog}/></>)
        }
        </>
       
    )
}

export default ProductdDetail