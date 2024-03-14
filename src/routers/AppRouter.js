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
const AppRouter=()=>{
return(
    <div>  
        <Routes>
          <Route path="/"
                element={
                    <>
                    <Trip/>
                    </>
                }
            />
            <Route path="/sign"
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

        </Routes>
    </div>
)
}
export default AppRouter;