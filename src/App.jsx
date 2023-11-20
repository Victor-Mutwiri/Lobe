import { Routes, Route } from "react-router-dom";
import Tours from "./Components/Tours/Tours";
import Examples from "./Components/Examples/Examples";
import Navbar from "./Components/Tours/Navbar/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tours />} />
      <Route path="/Examples" element={<Examples />} />
    </Routes>
  );
}

export default App;
