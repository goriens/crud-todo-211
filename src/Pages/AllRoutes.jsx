import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/" element={<HomePage />} />*/}
      </Routes>
    </div>
  );
};