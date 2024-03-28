import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductTable({ data, deleteItem }) {
    const navigate = useNavigate();
    
    if (!data || !data[0]?.items || data[0].items.length === 0) {
      return <div>Trip Log가 없습니다.😂</div>;
    }
  
    const dataList = data[0].items;
  
    const showProduct = (id) => {
      navigate(`/trip/${id}`);
    };
  
    return (
      <Wrap>
        {dataList.map((item, index) => (
          <div key={index} className="cursor-pointer photoCard" onClick={() => showProduct(index)}>
            <img className="photoCard-Img" src={item?.image[0]} alt={item?.image[0]} />
            <div className="truncate photoCard-Title">{item?.title}</div>
          </div>
        ))}
      </Wrap>
    );
  }
  
  const Wrap=styled.div`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  `
  export default ProductTable;