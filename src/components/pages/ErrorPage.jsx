import React from "react";

import { Divider } from "@material-ui/core";
import { Alert } from "@material-ui/core";
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const ErrorPage = () => {
  return (
    <Divider>
      <Alert severity="error">Please select the information you are interested in.</Alert><ArrowUpward fontSize="large"/>
    </Divider>
  );
};

export default ErrorPage;
