import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const WatchForm = ({ addListItem }) => {
  const [userInput, setUsetInput] = useState("");

  const handleChange = (e) => {
    setUsetInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addListItem(userInput);
    setUsetInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <TextField
        fullWidth
        sx={{ width: "80%" }}
        label="Write episode name..."
        value={userInput}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default WatchForm;
