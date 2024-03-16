import styled from 'styled-components';
import {useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
import ProductAdd from './productAdd';

const StyledCard = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;

const CardContent = styled.div`
  padding: 0;
`;

const StyledButton = styled.button`
  background-color: #4b5563;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #374151;
  }
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  max-height: 540px;
`;

const TravelImage = styled.img`
  width: 100%;
  height: 12.5rem; /* Adjust as needed */
  object-fit: cover;
  cursor: pointer;
`;

const TravelDestination = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: #6b7280;
`;

function Trip() {
  const user= useSelector((state)=>state.user.user);
  const [mode,setMode]=useState("new");
  const [showDialog,setShowDialog] =useState(false);

  const handleClickNewTrip =()=>{
    setMode("new");
    setShowDialog(true);
  }
  return (
    <StyledCard>
      <CardHeader>
        <CardTitle>내 여행 기록</CardTitle>
        {!user && (
          <>
            <CardDescription>로그인 후 작성한 글을 모아볼 수 있습니다.</CardDescription>
          </>
        )}
      </CardHeader>
      <div>
        {
          user && (
            <>
            <StyledButton onClick={handleClickNewTrip}>+</StyledButton>
            </>
          )
        }
      </div>
      <CardContent>
        <ScrollArea>
          <div>
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index}>
                {/* <Link href="#">
                  <TravelImage
                    alt="Travel Photo"
                    src="/placeholder.svg"
                  />
                </Link> */}
                <TravelDestination>Travel Destination {index + 1}</TravelDestination>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      {
        showDialog && ( <><ProductAdd mode ={mode} setShowDialog ={setShowDialog} showDialog= {showDialog}/></>)
      }
    </StyledCard>
  );
}

export default Trip;