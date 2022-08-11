import "./App.css";

import styled from "styled-components";

import { RowFlexDiv } from "./styled";

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

const Box = styled.div`
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;

`;

export default App;
