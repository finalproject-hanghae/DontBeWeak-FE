import "./App.css";

import styled from "styled-components";

import { RowFlexDiv } from "./style/styled";

import WebSection from "./pages/WebSection";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <AppPage className="App">
<<<<<<< HEAD
      <MainSection /> 
=======
      <MainSection />
>>>>>>> f765778f3819b4d6322d12c749332fe22132d736
      <WebSection />
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;
<<<<<<< HEAD
  
  justify-content: center;
  background-color: #FFF096
=======
  background-color: #FFF096;
  justify-content: space-between;
>>>>>>> f765778f3819b4d6322d12c749332fe22132d736
`;

export default App;