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
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Message = ({ name, email, message, id, refreshFunc }) => {
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:3002/control/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => refreshFunc());
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "600px", maxWidth: "70%", marginLeft: "255px" }}
    >
      <DeleteOutlineIcon
        sx={{ marginLeft: "20px", cursor: "pointer" }}
        onClick={handleDelete}
      >
        Delete
      </DeleteOutlineIcon>
      <Table aria-label="simple table" stickyHeader>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              {name}
              <br />
              <br />
              <span className="span-msg">Message :</span>
              {/* <br /> */}
              <label className="label-msg">{message}</label>
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", textAlign: "right" }}
            >
              {email}
            </TableCell>
            {/* <TableCell sx={{ fontWeight: "bold", textAlign: "right" }}>
            </TableCell> */}
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
