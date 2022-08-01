import { Box } from "@mui/material";

const FooterContainer = ({
  HandelSelectAll,
  HandelSelectActive,
  HandelSelectCompleted,
  all,
  active,
  completed,
}: Iprops) => {
  return (
    <Box className="footer-container">
      <p className={`${all}`} onClick={HandelSelectAll}>
        <strong>All</strong>
      </p>
      <p className={`${active}`} onClick={HandelSelectActive}>
        <strong>Active</strong>
      </p>
      <p className={`${completed}`} onClick={HandelSelectCompleted}>
        <strong>Completed</strong>
      </p>
    </Box>
  );
};

type Iprops = {
  HandelSelectAll: () => void;
  HandelSelectActive: () => void;
  HandelSelectCompleted: () => void;
  all: string;
  active: string;
  completed: string;
};
export { FooterContainer };
