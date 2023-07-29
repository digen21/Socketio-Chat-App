import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Chat, Join } from "Components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
