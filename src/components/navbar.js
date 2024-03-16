import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userActions } from "../action/userAction";

function Navber(){
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const user= useSelector((state)=>state.user.user);
    
    const logout=()=>{
       console.log('로그아웃클릭')
        dispatch(userActions.logout());
    }
    return (
        <div>
           {user ?(
                <div onClick={logout} className="log">
                  {/* {!isMobile && ( */}
                    <span className="log">로그아웃</span>
                  {/* )} */}
                </div>
              ) : (
                <div onClick={() => navigate("/login")} className="log">
                  {/* {!isMobile &&  */}
                  <span className="log">로그인</span>
                  {/* } */}
                </div>
            )}
        </div>
    )
}
export default Navber;