import * as types from "../constants/product.constants";
import api from "../utils/api";

const createProduct = ({updatedFormData})=>async(dispatch) => {
        try {
            dispatch({type:types.PRODUCT_CREATE_REQUEST});
            const response = await api.post('/product',updatedFormData);
            if(response.status !==200) throw new Error(response.error);
            dispatch({type:types.PRODUCT_CREATE_SUCCESS});
            alert("추가 되었습니다.")
        } 
        catch (error) {
            dispatch({type:types.PRODUCT_CREATE_FAIL,payload:error.error})
        }
    };

const getProductList=(query)=>async(dispatch)=>{
    try{
        dispatch({type:types.PRODUCT_GET_REQUEST});
        const response=await api.get('/product');
        if(response.status !==200) throw new Error(response.error);
        dispatch({type:types.PRODUCT_GET_SUCCESS,payload:response.data.data});
    }
    catch (error) {
        dispatch({type:types.PRODUCT_GET_FAIL,payload:error.error})
    }
}

const getProductDetail=(id)=>async(dispatch)=>{
    try{
        dispatch({type:types.PRODUCT_GET_DETAIL_REQUEST});
        const response = await api.get(`/product/${id}`);
        if (response.status !== 200) throw new Error(response.error);
        dispatch({
            type: types.PRODUCT_GET_DETAIL_SUCCESS,
            payload: response.data.data,
          });
    }
    catch(error){
        dispatch({type:types.PRODUCT_GET_DETAIL_FAIL,payload:error.error});
    }
}

export const productAtion = {
    createProduct,
    getProductList,
    getProductDetail,
    
};