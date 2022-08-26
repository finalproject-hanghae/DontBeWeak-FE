import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";

import { loadSessionDataMW } from "./redux/modules/users";
import { RowFlexDiv } from "./style/styled";
import MainSection from "./pages/MainSection";
import WebSection from "./pages/WebSection";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let sessionStorage = window.sessionStorage;
    sessionStorage.getItem("authorization") && dispatch(loadSessionDataMW());
  }, []);

  return (
    <AppPage className="App">
      <MainSection />
      <WebSection />
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;
  justify-content: space-between;
`;

export default App;