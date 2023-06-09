import { Route, Routes } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Form from "./pages/Form";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
