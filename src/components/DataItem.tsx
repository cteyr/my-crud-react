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
  const [Complete, setComplete] = useState(Boolean);
  //const [Disabled, setDisabled] = useState(false);

  const selected = () => {
    if (Complete === true) {
      setComplete(false);
      //setDisabled(false);
      element.completed = false;
    }else if (Complete === false){
      setComplete(true);
      // setDisabled(true);
      element.completed = true;
    }
   
  };

  return (
    <ListItem className="items" key={element.id}>
      <ListItemText
        className={`${classname}${
          element.completed === true ? `completed` : ""
        }`}
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
