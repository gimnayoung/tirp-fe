import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductTable({ data, deleteItem }) {
    const navigate = useNavigate();
    
    if (!data || !data[0]?.items || data[0].items.length === 0) {
      return <div>조금만 기다려주세요.</div>;
    }
  
    const dataList = data[0].items;
  
    const showProduct = (id) => {
      navigate(`/trip/${id}`);
    };
  
    return (
      <div>
        {dataList.map((item, index) => (
          <div key={index} className="photoCard" onClick={() => showProduct(index)}>
            <img className="photoCard-Img" src={item?.image[0]} alt={item?.image[0]} />
            <div className="photoCard-Title">{item?.title}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductTable;