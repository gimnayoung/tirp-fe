import styled from 'styled-components';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import ProductAdd from './productAdd';
import { productAtion } from '../action/productAtion';
import ProductTable from './productTable';
import * as types from "../constants/product.constants";

function Trip() {
  const dispatch=useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const user= useSelector((state)=>state.user.user);
  const [name,setName] = useState('');
  const [showDialog,setShowDialog] =useState(false);

  useEffect(()=>{
    dispatch(productAtion.getProductList())
  },[])
  useEffect(()=>{
    if (user){
      setName(user.name)
    }
  },[user])
  const handleClickNewTrip =()=>{
    setShowDialog(true);
    dispatch({type:types.PRODUCT_ADD_EDIT_MODAL,payload:"new"});
  }

  return (
    <div className='card' style={{ boxShadow: "4px 4px 0px 5px rgba(161,148,148,0.9)" }}>
      <Wrap>
      <div className='flex p-1 h-[64px] items-center relative'>
        <div className='absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-mainColor-color_Black'>{name}님의 Trip Log</div>
        {!user && (<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[13px] text-[red]'>로그인 후 작성한 글을 모아볼 수 있습니다.</div>
        )}
        {user && (<div className='button w-12 h-7 absolute right-1' onClick={handleClickNewTrip}>추가</div>)
        }
      </div>
      {
        user ? (<CardContent>
          <ProductTable
          data={productList}
          />
        </CardContent>) :(<button>로그인하러 가기</button>)
      }
      {
        showDialog && ( <><ProductAdd setShowDialog ={setShowDialog} showDialog= {showDialog}/></>)
      }
      </Wrap>
    </div>
  );
}
const CardContent = styled.div`
  height: 85%;
  overflow-y: scroll;
`;
const ModalHeader=styled.div`
padding: 4px;
display: flex;
align-items: center;
height: 64px;
`
const Wrap = styled.div`
height: 100%;
box-sizing: border-box;
`

// {Array.from({ length: 20 }, (_, index) => (
//   <div key={index}>
//     {/* <Link href="#">
//       <TravelImage
//         alt="Travel Photo"
//         src="/placeholder.svg"
//       />
//     </Link> */}
//     <TravelDestination>Travel Destination {index + 1}</TravelDestination>
//   </div>
// ))}
export default Trip;