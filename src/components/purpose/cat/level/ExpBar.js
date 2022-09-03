/* ***** Level Up Rules ****** 
  - 최대 레벨 : 30
  - 1레벨 당 최대 경험치 : 20
  - 포인트 5점 사용 시 경험치 5씩 증가 => 1/4 씩 바가 채워짐 ,
  - 1업을 하기 위해선 총 20점의 포인트(=경험치 20)가 필요함. => 4/4 
*/
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ExpBar = ({ exp }) => {
  const myExp = exp;
  const [ex, setEx] = useState(0);

  const updatePercentage = (e) => {
    setTimeout(() => {
      setEx(ex + myExp);
      console.log(ex, "올라라랄라");
    });
  };

  // 경험치 상승, 레벨업에 따른 초기화 작업
  React.useEffect(() => {
    if (myExp > 20){
      setEx(0);
      return alert('레베럽!')
    } else {
      setEx(ex + myExp);
    }
  }, []);

  return (
    <Container>
      <small>{myExp} / 20</small>
      <MyExp width={(myExp/20) * 100 + "%"} onChange={updatePercentage} />
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
