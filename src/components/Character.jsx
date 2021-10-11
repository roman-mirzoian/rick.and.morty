import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Character({ props, onClick, fullInfo = false }) {
  if (!fullInfo) {
    return (
      <Grid item xs={3} onClick={() => onClick(props)}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            image={props.image}
            alt="Character photo"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography>Status: {props.status?.toLowerCase()}</Typography>
            <Typography>Species: {props.species}</Typography>
            <Typography>Location: {props.location?.name}</Typography>
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
            <Button size="small">View info</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
  if (fullInfo) {
    if (props.id) {
      return (
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 'none' }}
          >
            <CardMedia
              component="img"
              image={props.image}
              alt="Character photo"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography>Created: {props.created}</Typography>
              <Typography>Gender: {props.gender}</Typography>
              <Typography>Location: {props.location?.name}</Typography>
              <Typography>Origin: {props.origin?.name}</Typography>
              <Typography>Species: {props.species}</Typography>
              <Typography>Status: {props.status?.toLowerCase()}</Typography>
              {props.type ? <Typography>Type: {props.type}</Typography> : null}
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => onClick()}>Close window</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    }
    return <div></div>;
  }
}

export default Character;
