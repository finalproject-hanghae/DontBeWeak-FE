import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { switchMenubarModal } from "../../../redux/modules/modals";
import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";

const MenuBarBtn = () => {
  const dispatch = useAppDispatch();
  const isMenu = useAppSelector((state) => state.modals.modals.menubarModal);
  const menubarRef = React.useRef<HTMLDivElement>(null);

  const menubarSwitch = () => {
    isMenu
      ? dispatch(switchMenubarModal(false))
      : dispatch(switchMenubarModal(true));
  };
  console.log(isMenu)

  React.useEffect(() => {
    menubarRef.current?.addEventListener("click", menubarSwitch);
    return () => {
      menubarRef.current?.removeEventListener("click", menubarSwitch);
    };
  }, [isMenu]);
  return (
    <MenuBar ref={menubarRef}>
      <MenuBarDot />
      <MenuBarDot />
      <MenuBarDot />
    </MenuBar>
  );
};

const MenuBar = styled(ColumnFlexDiv)`
  display: none;
  width: 32px;
  height: 32px;

  @media ${devices.laptopL} {
    justify-content:space-between;
    display: flex;
  }
  cursor: pointer;
`;

const MenuBarDot = styled.div`
  height: 8px;
  margin: 2px 0px;
  border-radius: 4px;
  background-color: #383838;
`;

export default MenuBarBtn;
