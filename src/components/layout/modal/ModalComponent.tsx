import { useNavigate } from "react-router-dom";
import React from "react";

import { ModalBg, ModalBody } from "../../../style/modal";
import { RelaitiveDiv } from "../../../style/styled";

type GreetingsProps = {
  to: string;
  children: any;
};

const ModalComponent = ({ to, children }: GreetingsProps) => {
  const navigate = useNavigate();
  console.log(children);
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(to);
        }}
      >
        <RelaitiveDiv>
          <ModalBody
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </ModalBody>
        </RelaitiveDiv>
      </ModalBg>
    </>
  );
};

export default ModalComponent;
