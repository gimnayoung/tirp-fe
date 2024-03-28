import * as types from "../constants/product.constants";

const initialState = {
  loading: false,
  error:"",
  productList:[],
  selectedProduct:null,
  detailEditProduct:null,
  modalState:""
};

function productReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.PRODUCT_CREATE_REQUEST:
        case types.PRODUCT_GET_REQUEST:
        case types.PRODUCT_GET_DETAIL_REQUEST:
        case types.PRODUCT_EDIT_REQUEST:
            return {...state, loading:true}
        case types.PRODUCT_CREATE_SUCCESS:
        case types.PRODUCT_EDIT_SUCCESS:
            return {...state , loading:false,error :""}
        case types.PRODUCT_GET_SUCCESS:
            return {...state , loading: false,error :"", productList:payload}
        case types.PRODUCT_GET_DETAIL_SUCCESS: {
            return { ...state, loading: false, selectedProduct: payload };
            }
        case types.PRODUCT_CREATE_FAIL:
        case types.PRODUCT_GET_FAIL:
        case types.PRODUCT_GET_DETAIL_FAIL:
        case types.PRODUCT_EDIT_FAIL:
            return {...state,error: payload}
        case types.PRODUCT_PUT_DETAIL_SELECTED:
            return { ...state,detailEditProduct:payload}
        case types.PRODUCT_ADD_EDIT_MODAL:
            return {...state,modalState:payload}
      default:
        return state; 
    }
  }
  
  export default productReducer;