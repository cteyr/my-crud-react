import { Item } from "../types/Item";
import { useState } from "react";

const useItem = () => {
    const [Items, setItems] = useState<Item[]>([]);
    


    return {Items,setItems}
};

export { useItem };
