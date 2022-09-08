import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ExpBar = ({ catData }) => {
  /* ***** Level Up Rules ****** 
  - 최대 레벨 : 30
  - 1레벨 당 최대 경험치 : 20
  - 포인트 5점 사용 시 경험치 5씩 증가 => 1/4 씩 바가 채워짐 ,
  - 1업을 하기 위해선 총 20점의 포인트(=경험치 20)가 필요함. => 4/4 
*/
  const ex = useSelector((state) => state.cats.cats.exp);
  useEffect(() => {
    if (ex > 20) {
      alert("레베럽!");
      return;
    }
  }, [ex]);

  return (
    <Container>
      <small>{ex} / 20</small>
      <MyExp width={(ex / 20) * 100 + "%"} />
    </Container>
  );
};

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
export default ExpBar;
