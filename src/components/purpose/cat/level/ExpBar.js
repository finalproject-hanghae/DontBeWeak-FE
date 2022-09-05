import React from "react";
import styled from "styled-components";
import { useState } from "react";
import useUserData from "../../../../hooks/useUserData";

const ExpBar = ({ catData }) => {
  /* *******설명******** 
    - 1레벨 당 최대 경험치 : 1000
    - 최대 레벨 : 30
    - 포인트 1점당 경험치 50씩 증가 => 1/4 씩 바가 채워짐 , 0.2/4
    - 1업을 하기 위해선 총 250점의 포인트(=경험치 1000)가 필요함. => 4/4
    
  */
  console.log(catData, "ㅑㅑ");
  const [ex, setEx] = useState();
 
  const updatePercentage = () => {
    setTimeout(() => {
      setEx(ex + 50);
      console.log(ex, "올라라랄라");
    });
  };

  // 경험치 상승, 레벨업에 따른 초기화 작업
  React.useEffect(() => {
    if (ex > 20){
      setEx(0);
      return alert('레베럽!')
    } 
  }, [ex]);

  return (
    <Container>
      {/*%로 부모넓이의 1/5 씩 넓어짐*/}
      <MyExp width={(ex / 25) * 1000 + "%"} onChange={updatePercentage}>
        <p> {catData?.exp} </p>
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
  text-align: center;
  line-height: 10px;
  small {
    position: absolute;
    left: 48%;
    color: #fff;
    font-size: 0.7rem;
  }
`;
const MyExp = styled.div`
  background-color: #ff795b;
  width: ${(props) => props.width};
  height: 100%;
  transition: 0.5s ease-out;
  border-radius: 30px;
`;
