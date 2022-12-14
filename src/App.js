import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./App.css";
import { getUsers } from "./actions";
import { userListSelector } from "./selectors";
import { routes } from "./routs";
import Error from "./components/UI/Error";
import ConfirmDialog from "./components/UI/confirmDialog";

function App() {
  const userList = useSelector(userListSelector);
  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h3" sx={{ pb: 8 }} color="primary">
        Dashboard
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
        }}
      >
        <Error />
        <ConfirmDialog />
        <Router>
          <Routes>
            {routes.map((el, index) => (
              <Route path={el.path} element={el.element} key={index} />
            ))}
          </Routes>
        </Router>
      </Paper>
    </Box>
  );
}

export default App;
