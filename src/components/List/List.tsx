import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { getData } from "../../api/requests";
import { useQuery } from "react-query";

import { columns, rows } from "../../constants/columns";

import "./List.scss";

const List = () => {
  // const { status, data, error, isFetching } = useQuery("getData", getData);

  return (
    <Paper sx={{ width: "80%", overflow: "hidden" }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          "&::-webkit-scrollbar": {
            width: "13px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#fbfbfb",
            borderLeft: "1px solid #dbdbdb",
            borderRight: "1px solid #585858",
            boxShadow: "-0.5px 0px 0px 0px  grey inset",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#bbbbbb",
            borderRadius: "50em",
            border: "3px solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "#c42172",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.description}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default List;
