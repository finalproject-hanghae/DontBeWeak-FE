import React from "react";
import { ColumnFlexDiv } from "../styled";

function SignUpForm() {

    

  return (
    <form>
      <ColumnFlexDiv>
        <h2>회원가입</h2>

        <input type="text" placeholder="ID"></input>
        <input type="text" placeholder="User name"></input>
        <input type="text" placeholder="PW"></input>
        <input type="text" placeholder="PW check"></input>

        <button>회원가입</button>
      </ColumnFlexDiv>
    </form>
  );
}

export default SignUpForm;
