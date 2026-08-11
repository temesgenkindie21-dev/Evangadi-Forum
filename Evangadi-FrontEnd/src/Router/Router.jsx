import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Landing from "../pages/Landing/Landing";
import HowItWorks from "../pages/HowItWorks/HowItWorks";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Landing />} />
      <Route path="/howitworks" element={<HowItWorks />} />
    </Routes>
  );
}

export default Router;
