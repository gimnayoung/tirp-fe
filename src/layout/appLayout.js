import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.loginWithToken());
  }, []);

  return (
    <div>
        <>
          <Navbar user={user} />
          {children}
        </>
    </div>
  );
};

export default AppLayout;
