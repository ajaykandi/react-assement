import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Capital from "./components/Capital";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/capital" element={<Capital />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
