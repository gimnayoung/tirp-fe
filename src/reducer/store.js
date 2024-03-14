import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
// import productReducer from "./productReducer";
// import cartReducer from "./cartReducer";
// import commonUiReducer from "./commonUIReducer";
// import orderReducer from "./orderReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
