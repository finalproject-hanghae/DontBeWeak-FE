import "./App.css";

import styled from "styled-components";

import { RowFlexDiv } from "./style/styled";

import WebSection from "./pages/WebSection";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <AppPage className="App">
      <WebSection />
      <MainSection />
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;
  background-color: #FFF096;
  justify-content: center;
`;

export default App;
