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
    <div className="table">
      <Paper sx={{ width: "90%", margin: "auto" }}>
        <TableContainer
          sx={{
            maxHeight: 750,
            "&::-webkit-scrollbar": {
              width: "13px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#fbfbfb",
              border: "1px solid #dbdbdb",
              boxShadow: "-0.5px 0px 0px 0px  grey inset",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#C1C3C6",
              border: "3px solid rgba(0, 0, 0, 0)",
              borderRadius: "50em",
              maxHeight: "2px !important",
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
                      color: "#B92E80",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      borderBottom: "3px solid #F8F8FA ",
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderBottom: "3px solid #F8F8FA ",
                          }}
                        >
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
    </div>
  );
};

export default List;
