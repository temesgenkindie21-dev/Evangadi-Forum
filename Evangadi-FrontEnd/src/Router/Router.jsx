import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Landing from "../pages/Landing/Landing";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Landing />} />
    </Routes>
  );
}

export default Router;
