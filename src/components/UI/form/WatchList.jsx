import React from "react";

import { Container, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { Alert } from "@material-ui/core";

const WatchList = ({ list, handleToggle, removeListItem }) => {
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {list.length
        ? list.map((value) => ItemList(value, removeListItem, handleToggle))
        : EmptyContainer()}
    </List>
  );
};

function EmptyContainer() {
  return (
    <Container>
      <Alert severity="info">
        Please write the episode you want to watch later :)
      </Alert>
    </Container>
  );
}

function ItemList(value, removeListItem, handleToggle) {
  const labelId = `checkbox-list-label-${value.id}`;

  return (
    <ListItem
      key={value.id}
      secondaryAction={
        <IconButton
          aria-label="delete"
          onClick={() => removeListItem(value.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={handleToggle(value)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value.complete}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`"${value.item?.trim()}"`} />
      </ListItemButton>
    </ListItem>
  );
}

export default WatchList;
