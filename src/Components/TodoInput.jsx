import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/Todo/action";

export const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const current = new Date();
  const date = ` ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => dispatch(addTodoSuccess(r.data)))
      .catch((e) => dispatch(addTodoFailure(e)));
  };
  const handleAdd = () => {
    if (todo) {
      const payload = {
        title: todo,
        status: false,
        date: date,
      };
      addTodo(payload);
      setTodo("");
    }
  };
  return (
    <div>
      <Box display="flex" fullWidth>
        <TextField
          fullWidth
          label="Whats on Your mind"
          variant="standard"
          sx={{ marginRight: "1rem" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          ADD
        </Button>
      </Box>
    </div>
  );
};
