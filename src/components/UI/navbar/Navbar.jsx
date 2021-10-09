import React from "react";
import { Link } from "react-router-dom";

import Stack from "@material-ui/core/Stack";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Tabs = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
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
          <Link to="/characters" variant="contained">
            Characters
          </Link>
          <Link to="/episodes" variant="outlined">
            Episodes
          </Link>
          <Link to="/locations" variant="outlined">
            Locations
          </Link>
          <Link to="/watch-list" variant="outlined">
            My watch list
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Tabs;
