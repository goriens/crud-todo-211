import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/Todo/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((e) => e.reducer);

  useEffect(() => {
    getTodo(dispatch);
  }, [dispatch]);
  console.log("todo", todo);
  return (
    <Box width="500px" m="auto" mt="3rem">
      <TodoInput />
      <TodoList />
    </Box>
  );
};
