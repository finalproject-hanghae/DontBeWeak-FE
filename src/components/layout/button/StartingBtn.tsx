import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../hooks/cookieController";
import { useAppSelector } from "../../../redux/hooks";

const StartingBtn = () => {
  const authorization = useAppSelector((state) => state.users.authorization);
  const navigate = useNavigate();
  return (
    <>
      {!authorization ? (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          영양제 기록하기
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/record/" + getCookie("username"));
          }}
        >
          영양제 기록하기
        </button>
      )}
    </>
  );
};

export default StartingBtn;
