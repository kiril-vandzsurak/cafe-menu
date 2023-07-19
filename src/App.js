import "./App.css";
import Admin from "./components/Admin/Admin";
import MainBody from "./components/MainBody/MainBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#1c1c1c" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainBody />} path="/" />
          <Route element={<Admin />} path="/admin" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
