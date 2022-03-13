import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Page/Home";
import Management from "./Page/Management";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Management" element={<Management />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
