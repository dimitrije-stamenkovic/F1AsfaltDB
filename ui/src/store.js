import { useState } from "react";
import { createContainer } from "unstated-next";

export const useStore = () => {
  // Construct a list that contains two default tasks
  const searchData = null;
  const [input, setValue] = useState("");
  // Let's set a legen -- wait for it -- dary default name that updates on form submit
  const handleInput = event => {
    setValue(event.target.value);
  };

  return {
    input,
    handleInput,
    searchData
  };
};
export const StoreContainer = createContainer(useStore);
