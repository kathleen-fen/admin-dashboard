import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./App.css";
import { getUsers } from "./actions";
import { routes } from "./routs";

function App() {
  useEffect(() => {
    dispatch(getUsers());
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
