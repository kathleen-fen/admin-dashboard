import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//import { getUsers } from "../actions";
import { userListSelector, isUsersLoadingSelector } from "../selectors";
import UserListSkeleton from "./UserListSkeleton";

const Users = () => {
  const navigate = useNavigate();
  const userList = useSelector(userListSelector);
  const isUsersLoading = useSelector(isUsersLoadingSelector);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ my: 2 }}>
          User List
        </Typography>
        <Button variant="contained" onClick={() => navigate("/addUser")}>
          Add User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isUsersLoading ? (
              <UserListSkeleton />
            ) : userList.length ? (
              userList.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">
                    {user.address
                      ? user.address.city
                        ? user.address.city
                        : null
                      : null}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => navigate(`/user/${user.id}`)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <Typography variant="h6"> Empty List</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
