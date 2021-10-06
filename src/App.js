import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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

import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState([]);
  axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      setCharacters(response.data.results)
    });

  console.log(characters);

  const theme = createTheme();

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" align="center" noWrap>
          Rick and Morty wiki
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Select the section of interest
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Characters</Button>
              <Button variant="outlined">Episodes</Button>
              <Button variant="outlined">Locations</Button>
              <Button variant="outlined">My watch list</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {characters.map((character, index) => (
              <Character key={character.id} props={character} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </div>
  );
}

export default App;
