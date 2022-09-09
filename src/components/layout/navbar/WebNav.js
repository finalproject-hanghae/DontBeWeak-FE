import React from "react";
import { LinkC } from "../../../style/styled";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { awaySessionDataMW } from "../../../redux/modules/users";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import { useFindWeek } from "../../../hooks/useFindWeek";
import { loadWeekDataMW } from "../../../redux/modules/weeks";
import { RowFlexDiv } from "../../../style/styled";

const WebNav = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.users.authorization);
  const week = useSelector((state) => state.weeks.week);
  const username = sessionStorage.getItem("username");
  const ClickToReloadRecordPageData = () => {
    let [startDate, endDate] = useFindWeek(week);
    const params = {
      startDate: startDate.replace(".", ""),
      endDate: endDate.replace(".", ""),
    };
    dispatch(loadDrugDataMW(username, params));
    dispatch(loadWeekDataMW(username, params));
  };
  return (
    <>
      {/* 로그아웃 */}
      {!authorization ? (
        <Navs>
          <li className="liSingle">
            <LinkC to="/"> About </LinkC>
          </li>
          <Account>
            <li>
              <LinkC to="/signup"> 회원가입 　|</LinkC>
            </li>
            <li>
              <LinkC to="/login">로그인 </LinkC>
            </li>
          </Account>
        </Navs>
      ) : (
        //  로그인
        <Navs>
          <li>
            <LinkC to="/"> About </LinkC>
          </li>
          <li>
            <LinkC
              to={"/record/" + username}
              onClick={() => ClickToReloadRecordPageData()}
            >
              복용기록
            </LinkC>
          </li>
          <li>
            <LinkC to={"/cat/" + username}> 고양이상태 </LinkC>
          </li>
          <Account>
            <li>
              <LinkC to="/" onClick={() => dispatch(awaySessionDataMW())}>
                로그아웃
              </LinkC>
            </li>
          </Account>
        </Navs>
      )}
    </>
  );
};

const Navs = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  li {
    float: left;
    margin-left: 10%;
  }
  .liSingle {
    margin-left: 35%;
  }
`;
const Account = styled(RowFlexDiv)`
  width: 29%;
  height: 100%;
  float: right;
  justify-content: center;
  font-size: 0.8rem;
`;

export default WebNav;
