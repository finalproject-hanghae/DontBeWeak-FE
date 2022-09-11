import React from "react";
import styled, { keyframes } from "styled-components";
import { devices } from "../../../device";
import { useFindWeek } from "../../../hooks/useFindWeek";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import { awaySessionDataMW } from "../../../redux/modules/users";
import { loadWeekDataMW } from "../../../redux/modules/weeks";
import { ColumnFlexDiv, LinkC, RowFlexDiv } from "../../../style/styled";

const MenuModal = () => {
  const dispatch = useAppDispatch();
  const authorization = useAppSelector((state) => state.users.authorization);
  const username = sessionStorage.getItem("username");
  const week = useAppSelector((state) => state.weeks.week);
  const ClickToReloadRecordPageData = () => {
    let [startDate, endDate] = useFindWeek(week);
    const params = {
      startDate: startDate.replace(".", ""),
      endDate: endDate.replace(".", ""),
    };
    dispatch(loadDrugDataMW(username));
    dispatch(loadWeekDataMW(username, params));
  };
  return (
    <MenuModalCard>
      <LinkC className="tabLink" to="/">
        About
      </LinkC>
      {authorization && (
        <>
          <LinkC
            className="tabLink"
            to={"/record/" + username}
            onClick={() => ClickToReloadRecordPageData()}
          >
            하루기록
          </LinkC>
          <LinkC className="tabLink" to={"/cat/" + username}>
            고양이 상태
          </LinkC>
        </>
      )}

      {!authorization ? (
        <>
          <LinkC className="smalla" to="/login">
            로그인
          </LinkC>
          <LinkC className="smalla" to="/signup">
            회원가입
          </LinkC>
        </>
      ) : (
        <LinkC to="/" onClick={() => dispatch(awaySessionDataMW())}>
          로그아웃
        </LinkC>
      )}
    </MenuModalCard>
  );
};

const keyRightToLeft = keyframes`
0%{
    height:0px;
}
50%{
    height:250px;
}
100%{
    height:300px;
}
`;

const MenuModalCard = styled(ColumnFlexDiv)`
  display: none;
  position: absolute;
  top: 70px;
  right: 0px;

  width: 170px;
  height: 300px;

  padding: 0px 20px;

  background-color: #fabc4f;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 2px 2px 2px 2px grey;
  z-index: 1000;
  animation: ${keyRightToLeft} 0.5s linear;

  @media ${devices.laptopL} {
    justify-content: space-evenly;
    display: flex;
  }
  a {
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
      color: #333;
    }
  }
`;

export default MenuModal;
