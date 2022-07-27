import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Item } from "../types/Item";

const DataItem = ({
  HandelClickEditIcon,
  HandelClickDeleteList,
  element,
  index,
}: IProps) => {
  return (
    <ListItem className="items" key={element.id}>
      <ListItemText className="item-text" primary={element.text} />
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
  );
};

type IProps = {
  element: Item;
  index: number;
  HandelClickEditIcon(element, index): void;
  HandelClickDeleteList(elementId): void;
};

export { DataItem };
