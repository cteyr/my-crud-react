import TextField from "@mui/material/TextField";

const Input = ({ value, onChange, onKeyDown }: Iprop) => {
  return (
    <TextField
      id="input-with-sx"
      label="Create a new Todo"
      variant="standard"
      className="inputTodo"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

type Iprop = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};
export { Input };
