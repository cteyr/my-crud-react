import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TextField from "@mui/material/TextField";

const MainContainer = () => {
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
            //backgroundColor: "blue",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <FeaturedPlayListIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="Create a new Todo"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "0.6rem",
              backgroundColor: "green",
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddBoxRoundedIcon />}
              color="success"
            >
              Add
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export { MainContainer };
