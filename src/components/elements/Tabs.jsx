import React from "react";

import Button from "@material-ui/core/Button";

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
          <Button variant="contained">Characters</Button>
          <Button variant="outlined">Episodes</Button>
          <Button variant="outlined">Locations</Button>
          <Button variant="outlined">My watch list</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Tabs;
