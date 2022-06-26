import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

export const TodoInput = () => {
  return (
    <div>
      <Box display="flex" fullWidth>
        <TextField
          fullWidth
          label="Whats on Your mind"
          variant="standard"
          sx={{ marginRight: "1rem" }}
        />
        <Button variant="contained">ADD</Button>
      </Box>
    </div>
  );
};
