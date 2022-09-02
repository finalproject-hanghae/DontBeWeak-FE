import React from "react";
import styled from "styled-components";
import { useState } from "react";
import useUserData from "../../../../hooks/useUserData";

const ExpBar = ({ userData }) => {
  /* *******설명******** 
    - 1레벨 당 최대 경험치 : 1000
    - 최대 레벨 : 30
    - 포인트 1점당 경험치 50씩 증가 => 1/4 씩 바가 채워짐 , 0.2/4
    - 1업을 하기 위해선 총 250점의 포인트(=경험치 1000)가 필요함. => 4/4
    
  */
  console.log(userData, "ㅑㅑ");
  const [ex, setEx] = useState();
 
  const updatePercentage = () => {
    setTimeout(() => {
      setEx(ex + 50);
    });
  };
  console.log(updatePercentage, "올라라랄라");

  // 경험치 상승, 레벨업에 따른 초기화 작업
  React.useEffect(() => {
    if (ex > 20) {
      alert("축하합니다! 레벨UP!");
      return setEx(1);
    }
  }, [ex]);

  return (
    <Container>
      {/*%로 부모넓이의 1/5 씩 넓어짐*/}
      <MyExp width={(ex / 25) * 1000 + "%"} onChange={updatePercentage}>
        <p> {userData?.exp} </p>
      </MyExp>
    </Container>
  );
};
export default ExpBar;

const Container = styled.div`
  margin: 50px auto;
  background-color: #eee;
  width: 400px;
  height: 15px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-left: 1%;
`;
const MyExp = styled.div`
  background-color: #ff795b;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 0.5s ease-out;
  border-radius: 30px;
`;

// //프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
// const Dot = styled.div`
//   width: 70px;
//   height: 70px;
//   box-sizing: border-box;
//   border: 10px solid blue;
//   border-radius: 35px;
//   background: yellow;
//   margin-left: -35px;
// `;
