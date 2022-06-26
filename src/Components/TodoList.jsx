import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.reducer.todo);
  //  console.log("todos", todos);
  const current = new Date();
  const date = ` ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <Box mt="1rem">
      {todos.map((item) => (
        <Stack direction="row" justifyContent="space-between" key={item.id}>
          <Stack direction="row" spacing={2}>
            <Typography>{item.id}. </Typography>
            <Stack spacing="-5px">
              <Typography>{item.title}</Typography>
              <Typography variant="caption">{date}</Typography>
            </Stack>
          </Stack>
          <hr />
          <Button>View</Button>
          <Button>View</Button>
          <Button>View</Button>
        </Stack>
      ))}
    </Box>
  );
};
