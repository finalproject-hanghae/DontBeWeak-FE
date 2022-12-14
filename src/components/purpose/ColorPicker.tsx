import React, { LegacyRef, RefObject, useRef, useState } from "react";
import styled from "styled-components";
import { devices } from "../../device";

type GreetingsProps = {
  color: string;
  setColor: any;
};

const ColorPicker = ({ color, setColor }: GreetingsProps) => {
  const colorRef = useRef<any>();
  console.log(colorRef.current);

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Pallete color={color} onClick={() => colorRef.current.click()}>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          ref={colorRef}
          hidden
        />
      </Pallete>
    </>
  );
};
const Pallete = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  box-sizing: border-box;
  border-radius: 5rem;
  background: ${(props) => props.color};
  position: absolute;
  right: 5rem;
  cursor: pointer;
  @media ${devices.mobileL} {
    width: 1rem;
    height: 1rem;
    right: 0.5rem;
  }
`;

export default ColorPicker;
