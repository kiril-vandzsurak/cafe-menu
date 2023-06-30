import "./App.css";
import Admin from "./components/Admin/Admin";
import MainBody from "./components/MainBody/MainBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainBody />} path="/" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
