import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const Message = ({ name, email, message }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "600px", maxWidth: "70%", marginLeft: "255px" }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              {name}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {email}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "right" }}>
              {message}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Message;

{
  /* <div>
      <h2>name is :{name}</h2>
      <h2>email is: {email}</h2>
      <h2>message is:{message}</h2>
    </div> */
}
