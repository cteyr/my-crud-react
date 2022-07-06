import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const MainContainer = () => {
  const [Item, setItems] = useState([]);
  const [InputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const HandelClickAddtoList = () => {
    if (InputValue != "") {
      setItems((prev) => [InputValue, ...prev]);
      setInputValue("");
    }
  };

  return (
    <div className="main-container">
      <h1>Todo App</h1>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "3rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <FeaturedPlayListIcon sx={{ color: "#2196f3", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Create a new Todo"
              variant="standard"
              className="inputTodo"
              value={InputValue}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "0.6rem",
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddBoxRoundedIcon />}
              color="success"
              onClick={HandelClickAddtoList}
              sx={{
                borderRadius: "5 px",
              }}
            >
              Add
            </Button>
          </Box>
        </Box>

        <Box className="list-container">
          <Grid item xs={12} md={6} className="list-items">
            <List>
              {Item.map((element, index) => (
                <ListItem className="items" key={index}>
                  <ListItemText primary={element} />
                  <IconButton aria-label="delete" color="primary">
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" className="remove-item">
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export { MainContainer };
