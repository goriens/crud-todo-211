import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const todos = useSelector((state) => state.reducer.todo);

  return (
    <Box mt="1rem">
      {todos.map((item) => (
        <Stack
          m="10px"
          direction="row"
          justifyContent="space-between"
          key={item.id}
        >
          <Link to={`todo/${item.id}`}>
            <Stack direction="row" spacing={2} width="200px">
              <Typography>{item.id}. </Typography>
              <Stack spacing="-5px">
                <Typography>{item.title}</Typography>
                <Typography variant="caption">{item.date}</Typography>
              </Stack>
            </Stack>
          </Link>
          <hr />
          <Button
            color="success"
            variant="contained"
            size="small"
            sx={{ marginRight: "6px" }}
          >
            View
          </Button>
          <Button variant="contained" size="small" sx={{ marginRight: "6px" }}>
            Edit
          </Button>
          <Button
            color="error"
            variant="contained"
            size="small"
            sx={{ marginRight: "6px" }}
          >
            Delete
          </Button>
        </Stack>
      ))}
    </Box>
  );
};
