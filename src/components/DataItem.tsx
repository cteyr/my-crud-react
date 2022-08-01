import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Item } from "../types/Item";
import { useState } from "react";

const DataItem = ({
  HandelClickEditIcon,
  HandelClickDeleteList,
  element,
  index,
  classname,
}: IProps) => {
  const [Complete, setComplete] = useState("");
  //const [Disabled, setDisabled] = useState(false);

  const selected = () => {
    if (Complete === "completed") {
      setComplete("");
      //setDisabled(false);
      element.completed = false;
      return;
    }
    setComplete("completed");
    // setDisabled(true);
    element.completed = true;
  };

  return (
    <ListItem className="items" key={element.id}>
      <ListItemText
        className={`${classname}${Complete}`}
        primary={element.text}
        onClick={selected}
      />
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={() => HandelClickEditIcon(element, index)}
        //disabled={Disabled}
      >
        <ModeEditIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        className="remove-item"
        onClick={() => HandelClickDeleteList(element.id)}
        //disabled={Disabled}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

type IProps = {
  element: Item;
  index: number;
  HandelClickEditIcon(element, index): void;
  HandelClickDeleteList(elementId): void;
  classname: string;
};

export { DataItem };
