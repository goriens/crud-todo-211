import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/Todo/action";

export const SingleTodo = () => {
  const todo = useSelector((state) => state.reducer.todo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState({});

  const handleStatus = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .get(`http://localhost:8080/todos/${id}`, { status: newStatus })
      .then((r) => dispatch(toggleTodoSuccess(r.data)))
      .catch((e) => dispatch(toggleTodoFailure(e)));
  };

  useEffect(() => {
    let currentTodo = todo.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todo, id]);
  console.log("curr", currentTodo);
  return (
    <div>
      <h3>
        {currentTodo?.title} - {currentTodo?.status ? "True" : "False"}
      </h3>
      <button
        onClick={() => handleStatus(currentTodo.id == !currentTodo.status)}
      >
        Toggle
      </button>
    </div>
  );
};
