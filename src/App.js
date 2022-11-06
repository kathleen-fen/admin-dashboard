import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { getUsers } from "./actions";
import { routes } from "./routs";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Router>
      <Routes>
        {routes.map((el, index) => (
          <Route path={el.path} element={el.element} key={index} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
