import "./App.css";

import styled from "styled-components";

import { RowFlexDiv } from "./style/styled";

import WebSection from "./pages/WebSection";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <AppPage className="App">
      <Box>
      <WebSection />
      <MainSection />
      </Box>
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;

  justify-content: center;
  background-color: #FFF096
`;

export default App;
