import React, { useEffect, useState } from "react";

import { Container } from "@material-ui/core";

import WatchForm from "../UI/form/WatchForm";
import WatchList from "../UI/form/WatchList";
import {
  addToStorage,
  getStorageData,
  removeFromStorage,
} from "../../utils/storage";

const MyWatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const [checked, setChecked] = useState([]);

  const addListItem = (userInput) => {
    if (userInput?.trim().length) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        item: userInput,
        complete: false,
      };
      setWatchList([...watchList, newItem]);
      addToStorage(newItem);
    }
  };
  const removeListItem = (id) => {
    setWatchList([...watchList.filter((item) => item.id !== id)]);
    removeFromStorage(id);
  };
  const handleToggle = (value) => () => {
    const newValue = { ...value, complete: !value.complete };
    addToStorage(newValue);

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    setWatchList([...getStorageData()]);
  }, [checked]);

  return (
    <Container maxWidth="sm">
      <WatchForm addListItem={addListItem} />
      <WatchList
        list={watchList}
        removeListItem={removeListItem}
        handleToggle={handleToggle}
      />
    </Container>
  );
};

export default MyWatchList;
