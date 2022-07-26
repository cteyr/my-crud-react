import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Item } from "../types/Item";

const ListContainer = ({
  HandelClickEditIcon,
  HandelClickDeleteList,
  Items,
}: IProps) => {
  return (
    <Box className="list-container">
      {Items.length > 0 && (
        <Grid item xs={12} md={6} className="list-items">
          <List>
            {Items?.map((element, index) => (
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
            ))}
          </List>
        </Grid>
      )}
    </Box>
  );
};

type IProps = {
  Items: Item[];
  HandelClickEditIcon(element, index): void;
  HandelClickDeleteList(elementId): void;
};
export { ListContainer };
