import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function Character(props) {
  // console.log(props.props);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            // pt: "56.25%",
          }}
          image={props.props.image}
          alt="Character photo"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.props.name}
          </Typography>
          <Typography>Status: {props.props.status}</Typography>
          <Typography>Species: {props.props.species}</Typography>
          <Typography>Location: {props.props.location.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Character;
