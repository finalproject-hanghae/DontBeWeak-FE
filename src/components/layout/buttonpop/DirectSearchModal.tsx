import React from "react";
import styled from "styled-components";

import { RowFlexDiv } from "../../../style/styled";

type GreetingsProps = {
  setPickMe: any;
};

const DirectSearchModal = React.forwardRef<HTMLInputElement, GreetingsProps>(
  (props, ref) => {
    const directInputRef = React.useRef<any>();
    return (
      <DirectSearchCard ref={ref}>
        <DirectInput
          ref={directInputRef}
          placeholder="상품명을 입력해주세요."
        />
        <SearchBtn
          onClick={() => props.setPickMe(directInputRef.current.value)}
        >
          {" "}
          확인{" "}
        </SearchBtn>
      </DirectSearchCard>
    );
  }
);

const DirectSearchCard = styled(RowFlexDiv)`
  width: 350px;
  height: 85px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const DirectInput = styled.input`
  width: 65%;
  height: 30%;
  margin-right: 3%;
  border: 0.5px solid #a4a4a4;
  outline: none;
  border-radius: 5px;
  line-height: 1.5rem;
  font-size: 1rem;
  padding: 1.3% 2%;
`;

const SearchBtn = styled.button`
  width: 15%;
  height: 2.5rem;
  text-align: center;
  line-height: 1.9rem;
  background: #fabc4f;
  color: #fff;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default DirectSearchModal;
