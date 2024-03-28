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

const getProductList=()=>async(dispatch)=>{
    try{
        dispatch({type:types.PRODUCT_GET_REQUEST});
        const response=await api.get('/product');
        if(response.status !==200) throw new Error(response.error);
        dispatch({type:types.PRODUCT_GET_SUCCESS,payload:response.data.data});
        console.log(response.data.data,"이게뭔지봐야겟어")
    }
    catch (error) {
        dispatch({type:types.PRODUCT_GET_FAIL,payload:error.error})
    }
}

const editProduct=({formData},editProductId,id)=>async(dispatch)=>{
    try{
        dispatch({type:types.PRODUCT_EDIT_REQUEST});
        const response = await api.put(`/product/${editProductId}`,{...formData,id});
        if(response.status !== 200)throw new Error(response.error);
        const newResponse=[{...response.data.data}]
        dispatch({type:types.PRODUCT_EDIT_SUCCESS,payload:newResponse});
        dispatch(getProductList())
    }
    catch (error) {
        dispatch({type:types.PRODUCT_EDIT_FAIL,payload:error.error})
    }
}

const deleteProduct=(ProductId)=>async(dispatch)=>{
    try{
        dispatch({type:types.PRODUCT_DELETE_REQUEST});
        const response = await api.delete(`/product/${ProductId}`);
        if(response.status !== 200)throw new Error(response.error);
        dispatch({type:types.PRODUCT_DELETE_SUCCESS});
    }
    catch (error) {
        dispatch({type:types.PRODUCT_EDIT_FAIL,payload:error.error})
    }
}
// const getProductDetail=(id)=>async(dispatch)=>{
//     try{
//         dispatch({type:types.PRODUCT_GET_DETAIL_REQUEST});
//         const response = await api.get(`/product/${id}`);
//         if (response.status !== 200) throw new Error(response.error);
//         dispatch({
//             type: types.PRODUCT_GET_DETAIL_SUCCESS,
//             payload: response.data.data,
//           });
//     }
//     catch(error){
//         dispatch({type:types.PRODUCT_GET_DETAIL_FAIL,payload:error.error});
//     }
// }

export const productAtion = {
    createProduct,
    getProductList,
    editProduct,   
    deleteProduct,
};