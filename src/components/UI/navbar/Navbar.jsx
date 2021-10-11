import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Stack from "@material-ui/core/Stack";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Button } from "@material-ui/core";

const Tabs = () => {
  const baseButtons = {
    characters: 'outlined',
    episodes: 'outlined',
    locations: 'outlined',
    ['my watch list']: 'outlined'
  };
  const [buttonVariants, setButtonVariants] = useState({...baseButtons});

  const onButtonSelected = (variant) => {
    const btn = variant.target.text.toLowerCase();
    setButtonVariants({...baseButtons, [`${btn}`]: 'contained'});
  }

  useEffect(() => {
    setButtonVariants({...baseButtons, characters: 'contained'});
  }, [])

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Select the section of interest
        </Typography>
        <Stack
          sx={{ py: 2 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button component={Link} to="/characters" variant={buttonVariants.characters} onClick={onButtonSelected}>
            Characters
          </Button>
          <Button component={Link} to="/episodes" variant={buttonVariants.episodes} onClick={onButtonSelected}>
            Episodes
          </Button>
          <Button component={Link} to="/locations" variant={buttonVariants.locations} onClick={onButtonSelected}>
            Locations
          </Button>
          <Button component={Link} to="/watch-list" variant={buttonVariants['my watch list']} onClick={onButtonSelected}>
            My watch list
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Tabs;
