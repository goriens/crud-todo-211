import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SingleTodo } from "./SingleTodo";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
      </Routes>
    </div>
  );
};
