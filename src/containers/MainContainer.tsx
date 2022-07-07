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
  const [isButtonVisible, setisButtonVisible] = useState(true);
  const [Index, setIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const KeyDownAddtoList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && isButtonVisible == true) {
      HandelClickAddtoList();
    } else if (event.code === "Enter" && isButtonVisible == false) {
      HandelClickEditButton();
    }
  };

  const HandelClickAddtoList = () => {
    if (InputValue != "") {
      setItems((prev) => [InputValue, ...prev]);
    }
    setInputValue("");
  };

  const HandelClickEditButton = () => {
    Items[Index] = InputValue;
    setInputValue("");
    setisButtonVisible(true);
  };

  const HandelClickEditIcon = (element, index) => {
    setInputValue(element);
    setisButtonVisible(false);
    setIndex(index);
  };

  const HandelClickDeleteList = (element: String, index: number) => {
    const newList = Items.filter((item) => {
      return item !== element;
    });
    setItems(newList);
  };

  return (
    <div className="main-container">
      <h1>Todo App</h1>
      <Box className="container">
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
            {isButtonVisible ? (
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
            ) : (
              <Button
                variant="contained"
                startIcon={<ModeEditIcon />}
                color="primary"
                onClick={HandelClickEditButton}
                sx={{
                  borderRadius: "5 px",
                }}
              >
                Edit
              </Button>
            )}
          </Box>
        </Box>

        <Box className="list-container">
          {Items.length > 0 && (
            <Grid item xs={12} md={6} className="list-items">
              <List>
                {Items?.map((element, index) => (
                  <ListItem className="items" key={index}>
                    <ListItemText primary={element} />
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => HandelClickEditIcon(element, index)}
                    >
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className="remove-item"
                      onClick={() => HandelClickDeleteList(`${element}`, index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}
        </Box>
      </Box>
    </div>
  );
};
export { MainContainer };
