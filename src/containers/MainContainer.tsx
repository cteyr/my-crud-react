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
  const [Items, setItems] = useState([]);
  const [InputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const KeyDownAddtoList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      HandelClickAddtoList();
    }
  };

  const HandelClickAddtoList = () => {
    if (InputValue != "" && !Items.includes(InputValue)) {
      setItems((prev) => [InputValue, ...prev]);
    }
    setInputValue("");
  };

  const HandelClickDeleteList = (element) => {
    const newList = Items.filter((item) => item !== element);
    setItems(newList);
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
              onKeyDown={KeyDownAddtoList}
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
          {Items.length > 0 && (
            <Grid item xs={12} md={6} className="list-items">
              <List>
                {Items?.map((element) => (
                  <ListItem className="items" key={element}>
                    <ListItemText primary={element} />
                    <IconButton aria-label="delete" color="primary">
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className="remove-item"
                      onClick={() => HandelClickDeleteList(`${element}`)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}
        </Box>
      </div>
    </div>
  );
};
export { MainContainer };
