import { useState } from "react";
import { useReducer } from "react";
import { Box } from "@mui/material";
import { Input } from "../components/Input";
import { Boton } from "../components/Button";
import { Header } from "../components/Header";
import { ListContainer } from "../containers/ListContainer";
import { FooterContainer } from "../containers/FooterContainer";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Item } from "../types/Item";
import { IFilter } from "../types/Item";
import { v4 } from "uuid";
import { useItem } from "../hooks/useItem";

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

const MainContainer = () => {
  const { Items, setItems } = useItem();
  const [Filter, setFilter] = useState<IFilter>("all");
  const [InputValue, setInputValue] = useState("");
  const [isButtonVisible, setisButtonVisible] = useState(true);
  const [Index, setIndex] = useState(0);
  const [Element, setElement] = useState<Item>();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getfilterItems = (Items, IFilter: string): Item[] => {
    if (IFilter === "selected") {
      const filtered = Items.filter((element) => element.completed === true);
      return filtered;
    } else if (IFilter === "active") {
      const filtered = Items.filter((element) => element.completed === false);
      return filtered;
    }
    return Items;
  };

  const HandelSelectAll = () => {
    dispatch({ type: "all" });
    setFilter("all");
    getfilterItems(Items, "all");
  };

  const HandelSelectActive = () => {
    dispatch({ type: "active" });
    setFilter("active");
    getfilterItems(Items, "active");
  };

  const HandelSelectCompleted = () => {
    dispatch({ type: "selected" });
    setFilter("selected");
    getfilterItems(Items, "selected");
  };

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
      const newItem: Item = {
        id: v4(),
        text: `${InputValue}`,
        completed: false,
      };
      setItems((prev) => [newItem, ...prev]);
    }
    setInputValue("");
  };

  const HandelClickEditButton = () => {
    Items[Index] = {
      id: Element.id,
      text: `${InputValue}`,
      completed: Element.completed,
    };
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
          Items={getfilterItems(Items, Filter)}
          HandelClickEditIcon={HandelClickEditIcon}
          HandelClickDeleteList={HandelClickDeleteList}
        />
      </Box>
      <FooterContainer
        all={state.all}
        active={state.active}
        completed={state.completed}
        HandelSelectAll={HandelSelectAll}
        HandelSelectActive={HandelSelectActive}
        HandelSelectCompleted={HandelSelectCompleted}
      />
    </div>
  );
};

export { MainContainer };
