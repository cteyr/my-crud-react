import { Button } from "@mui/material";

const Boton = ({ clasname, text, color, onClick, icon }: IProps) => {
  return (
    <Button
      className={clasname}
      variant="contained"
      startIcon={icon}
      color={color}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

type IProps = {
  onClick: () => void;
  icon: any;
  color?: any;
  text?: string;
  clasname?: string;
};
export { Boton };
