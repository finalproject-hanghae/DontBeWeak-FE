import React, { useRef, useState } from "react";
import styled from "styled-components";

const ColorPicker = ({color,setColor}) => {
  const colorRef = useRef();
  console.log(colorRef.current);

 
  const handleColorChange = (e) => {
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
  /* border: 0.2rem solid orange; */
  box-sizing: border-box;
  border-radius: 5rem;
  background: ${(props) => props.color};
  position: absolute;
  right: 5rem;
  cursor: pointer;
`;

export default ColorPicker;
