import React from "react";
import styled from "styled-components";
import { useState } from "react";
import useUserData from "../../../../hooks/useUserData";

const ExpBar = () => {
  // const userData = useUserData();

  const [ex, setEx] = useState(0);

  const updatePercentage = () => {
    setTimeout(() => {
      setEx(ex + 100);
    })
  };
 console.log(updatePercentage, "올라라랄라")

  React.useEffect(() => {
    if (ex === 20) {
      setEx(0);
      return alert("레벨UP!");
    } else {
      setEx(ex + 1);
    }
  }, []);

  return (
    <Container>
      {/*%로 부모넓이의 1/5 씩 넓어짐*/}
      <MyExp width={(ex / 20) * 100 + "%"} />
    </Container>
  );
};
export default ExpBar;

const Container = styled.div`
  margin: 50px auto;
  background-color: #eee;
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-left: 1%;
`;
const MyExp= styled.div`
  background-color: #FF795B;
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
