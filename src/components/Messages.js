import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const Messages = () => {
  const [contactUs, setContactUs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3002/control/")
      .catch((err) => console.log(err));
    const data = await res.data;
    setContactUs(data.contactUs);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div>
      <TableContainer
        sx={{ maxHeight: "600px", maxWidth: "70%", marginLeft: "255px" }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "dodgerblue",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "dodgerblue" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  textAlign: "right",
                  color: "dodgerblue",
                }}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {contactUs &&
        contactUs.map((message) => (
          <Message
            key={message._id}
            id={message._id}
            name={message.name}
            email={message.email}
            message={message.message}
           refreshFunc ={sendRequest}
          ></Message>
        ))}
    </div>
  );
};

export default Messages;
