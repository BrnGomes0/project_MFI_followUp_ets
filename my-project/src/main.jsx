import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import UploadScreen from "./Screens/UploadScreen/UploadScreen";
import ViewScreen from "./Screens/ViewScreen/ViewScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/upload" element={<UploadScreen/>}/>
        <Route path="/view" element={<ViewScreen/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
