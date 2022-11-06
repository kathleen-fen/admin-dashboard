import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";

const UserListSkeleton = () => (
  <>
    {Array.from(new Array(10)).map((user, index) => (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="right">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="right">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="right">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="right">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="center">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
        <TableCell align="center">
          <Skeleton variant="rectangular" width="90%" height={50} />
        </TableCell>
      </TableRow>
    ))}
  </>
);

export default UserListSkeleton;
