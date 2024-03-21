import React from "react";
import {
    Route,
    Routes,
    Link,
    useNavigate,
    Outlet,
    BrowserRouter,
    HashRouter,
  } from "react-router-dom";
import SignUp from "../components/signUp";
import Login from "../components/login"
import Trip from "../components/trip";
import ProductAdd from "../components/productAdd";
import Test from "../page/test"
import PostCode from "../components/postCode";
import GoogleCode from "../components/googleCode";
import LoginCard from "../components/loginCard";
import Main from "../page/main";
import styled from "styled-components";
import Testfile from "../components/testFile";

const Wrap = styled.div`
display: flex; 
height: 100vh;
justify-content: center;
align-items: center;  
`
const AppRouter=()=>{
return(
    <Wrap>  
        <Routes>
          <Route path="/"
                element={
                    <>
                    <Main/>
                    </>
                }
            />
            <Route path="/trip"
                element={
                    <>
                    <Trip/>
                    </>
                }
            />
            <Route path="/signup"
                element={
                    <>
                    <SignUp/>
                    </>
                }
            />
            <Route path="/login"
                element={
                    <>
                    <Login/>
                    </>
                }
            />
            <Route path="/productAdd"
                element={
                    <>
                    <ProductAdd/>
                    </>
                }
            />
            <Route path="/test"
                element={
                    <>
                    {/* <Test/> */}
                    {/* <PostCode/> */}
                    {/* <GoogleCode/> */}
                    {/* <LoginCard/> */}
                    <Testfile/>
                    </>
                }
            />
        </Routes>
    </Wrap>
)
}
export default AppRouter;