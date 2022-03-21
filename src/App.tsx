import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Checking from "./Page/Checking";
import Home from "./Page/Home";
import Management from "./Page/Management";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/CheckingTickets" element={<Checking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
