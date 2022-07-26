import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Input } from "../components/Input";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { v4 } from "uuid";

const MainContainer = () => {
  const [Items, setItems] = useState<Item[]>([]);
  const [InputValue, setInputValue] = useState("");
  const [isButtonVisible, setisButtonVisible] = useState(true);
  const [Index, setIndex] = useState(0);
  const [Element, setElement] = useState<Item>();

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
      const newItem: Item = { id: v4(), text: `${InputValue}` };
      setItems((prev) => [newItem, ...prev]);
    }
    setInputValue("");
  };

  const HandelClickEditButton = () => {
    Items[Index] = { id: Element.id, text: `${InputValue}` };
    setInputValue("");
    setisButtonVisible(true);
  };

  const HandelClickEditIcon = (element, index) => {
    setElement(element);
    setInputValue(element.text);
    setisButtonVisible(false);
    setIndex(index);
  };

  const HandelClickDeleteList = (id) => {
    const newList = Items.filter((item) => {
      return item.id !== id;
    });
    setItems(newList);
    setInputValue("");
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
            <Input
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
                    <ListItemText
                      className="item-text"
                      primary={element.text}
                    />
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
                      onClick={() => HandelClickDeleteList(element.id)}
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

type Item = {
  id: String;
  text: String;
};

export { MainContainer };
