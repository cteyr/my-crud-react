import { Box } from "@mui/material";
import { useReducer } from "react";

const initialState = {
  all: "selected",
  active: "",
  completed: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "all":
      return {
        all: "selected",
        active: "",
        completed: "",
      };
    case "active":
      return {
        all: "",
        active: "selected",
        completed: "",
      };
    case "selected":
      return {
        all: "",
        active: "",
        completed: "selected",
      };
  }
  return state;
};

const FooterContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const HandelSelectAll = () => {
    dispatch({ type: "all" });
  };

  const HandelSelectActive = () => {
    dispatch({ type: "active" });
  };

  const HandelSelectSelected = () => {
    dispatch({ type: "selected" });
  };

  return (
    <Box className="footer-container">
      <p className={`${state.all}`} onClick={HandelSelectAll}>
        <strong>All</strong>
      </p>
      <p className={`${state.active}`} onClick={HandelSelectActive}>
        <strong>Active</strong>
      </p>
      <p className={`${state.completed}`} onClick={HandelSelectSelected}>
        <strong>Completed</strong>
      </p>
    </Box>
  );
};
export { FooterContainer };
