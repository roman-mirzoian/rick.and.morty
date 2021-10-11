import React from "react";

import { Divider } from "@material-ui/core";
import { Alert } from "@material-ui/core";

const ErrorPage = () => {
  return (
    <Divider>
      <Alert severity="error">Sorry, page not found :(</Alert>
    </Divider>
  );
};

export default ErrorPage;
