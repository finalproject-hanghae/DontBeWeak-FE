import React from "react";
import styled from "styled-components";
import {ColumnFlexDiv} from "../styled";

const LogInForm = () => {
    const logInIDRef = React.useRef();
    const logInPWRef = React.useRef();


  return (
    <form>
        <ColumnFlexDiv>
      <h3>로그인</h3>
      <input type="text" placeholder="ID" ref={logInIDRef}></input>
      <input type="password" placeholder="PW" ref={logInPWRef}></input>
      <button>로그인</button>
      <button>카카오로그인</button>
      <button>네이버로그인</button>
      </ColumnFlexDiv>
    </form>
  );
};

export default LogInForm;
