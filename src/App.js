import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import WebSection from "./components/WebSection";
import NotFoundPage from "./pages/NotFoundPage";
import RecordingPage from "./pages/RecordingPage";
import A11yHidden from "./utils/A11yHidden";

function App() {
  return (
    <div className="App">
      <WebSection/>
      <Routes >
        <Route index element={<StartingPage/>} />
        <Route index element={<RecordingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
