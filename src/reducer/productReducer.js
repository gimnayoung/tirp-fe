import * as types from "../constants/product.constants";

const initialState = {
  loading: false,
  error:"",
  productList:[],
  selectedProduct:null,
};

function productReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.PRODUCT_CREATE_REQUEST:
        case types.PRODUCT_GET_REQUEST:
        case types.PRODUCT_GET_DETAIL_REQUEST:
            return {...state, loading:true}
        case types.PRODUCT_CREATE_SUCCESS:
            return {...state , loading:false,error :""}
        case types.PRODUCT_GET_SUCCESS:
            return {...state , loading: false,error :"", productList:payload}
        case types.PRODUCT_GET_DETAIL_SUCCESS: {
            return { ...state, loading: false, selectedProduct: payload };
            }
        case types.PRODUCT_CREATE_FAIL:
        case types.PRODUCT_GET_FAIL:
        case types.PRODUCT_GET_DETAIL_FAIL:
            return {...state,error: payload}
      default:
        return state; 
    }
  }
  
  export default productReducer;