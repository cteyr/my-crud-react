import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { DataItem } from "../components/DataItem";
import { Item } from "../types/Item";

const ListContainer = ({
  Items,
  HandelClickEditIcon,
  HandelClickDeleteList,
}: IProps) => {
  return (
    <Box className="list-container">
      {Items.length > 0 && (
        <Grid item xs={12} md={6} className="list-items">
          <List>
            {Items?.map((element, index) => (
              <DataItem
                key={element.id}
                element={element}
                index={index}
                HandelClickDeleteList={HandelClickDeleteList}
                HandelClickEditIcon={HandelClickEditIcon}
              />
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
