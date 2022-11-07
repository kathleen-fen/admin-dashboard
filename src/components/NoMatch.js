import { Box } from "@mui/system";
import React from "react";

const NoMatch = () => (
  <Box
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Box textAlign="center" fontSize="72px">
      404
    </Box>
    <Box textAlign="center" fontSize="20px">
      OOPS! PAGE NOT FOUND!
    </Box>
  </Box>
);

export default NoMatch;
