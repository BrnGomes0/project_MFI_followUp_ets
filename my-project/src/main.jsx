import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
