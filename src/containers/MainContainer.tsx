import { useState } from "react";
import { Box } from "@mui/material";
import { Input } from "../components/Input";
import { Boton } from "../components/Button";
import { Header } from "../components/Header";
import { ListContainer } from "../containers/ListContainer";
import { FooterContainer } from "../containers/FooterContainer";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Item } from "../types/Item";
import { v4 } from "uuid";

const MainContainer = () => {
  const [Items, setItems] = useState<Item[]>([]);
  const [InputValue, setInputValue] = useState("");
  const [isButtonVisible, setisButtonVisible] = useState(true);
  const [Index, setIndex] = useState(0);
  const [Element, setElement] = useState<Item>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const KeyDownAddtoList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && isButtonVisible == true) {
      HandelClickAddtoList();
    } else if (event.code === "Enter" && isButtonVisible == false) {
      HandelClickEditButton();
    }
  };

  const HandelClickAddtoList = () => {
    if (InputValue != "") {
      const newItem: Item = { id: v4(), text: `${InputValue}` };
      setItems((prev) => [newItem, ...prev]);
    }
    setInputValue("");
  };

  const HandelClickEditButton = () => {
    Items[Index] = { id: Element.id, text: `${InputValue}` };
    setInputValue("");
    setisButtonVisible(true);
  };

  const HandelClickEditIcon = (element, index) => {
    setElement(element);
    setInputValue(element.text);
    setisButtonVisible(false);
    setIndex(index);
  };

  const HandelClickDeleteList = (id) => {
    const newList = Items.filter((item) => {
      return item.id !== id;
    });
    setItems(newList);
    setInputValue("");
  };

  return (
    <div className="main-container">
      <Header />
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "3rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Input
              value={InputValue}
              onChange={handleChange}
              onKeyDown={KeyDownAddtoList}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "0.6rem",
            }}
          >
            {isButtonVisible ? (
              <Boton
                clasname="submit-button"
                onClick={HandelClickAddtoList}
                color={"success"}
                icon={<AddBoxRoundedIcon />}
                text="Add"
              />
            ) : (
              <Boton
                clasname="submit-button"
                onClick={HandelClickEditButton}
                color={"primary"}
                icon={<ModeEditIcon />}
                text="Edit"
              />
            )}
          </Box>
        </Box>
        <ListContainer
          Items={Items}
          HandelClickEditIcon={HandelClickEditIcon}
          HandelClickDeleteList={HandelClickDeleteList}
        />
      </Box>
      <FooterContainer />
    </div>
  );
};

export { MainContainer };
