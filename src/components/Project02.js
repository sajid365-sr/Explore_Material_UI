import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, IconButton, Rating } from "@mui/material";
import TextField from "@mui/material/TextField";

const Project02 = () => {
  const [rating, setRating] = useState(true);

  console.log(rating);
  return (
    <div>
      <InstagramIcon color="primary" />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{
          color: "steelblue",
        }}
      />

      <TextField
        id="outlined-basic"
        label="User name"
        error={false}
        helperText="Invalid Name"
        variant="outlined"
      />
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </div>
  );
};

export default Project02;
