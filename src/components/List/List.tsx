import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { getData } from "../../api/requests";
import { columns } from "../../constants/columns";
import { businessProps } from "../../types/businessTypes";

import "./List.scss";

const List = () => {
  const navigate = useNavigate();
  const { status, data, error } = useQuery("getData", getData);

  if (status === "loading") {
    return <span>Loading...</span>;
  }
  if (status === "error" && error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  const handleRedirect = (
    business: businessProps,
    businessesList: businessProps[]
  ) => {
    navigate(`/item/${business.id}`, {
      state: {
        business,
        businessesList,
      },
    });
  };

  return (
    <>
      {data && (
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
                          fontWeight: "bolder",
                          borderBottom: "3px solid #F8F8FA ",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((business) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={business.id}
                        sx={{ cursor: "pointer" }}
                      >
                        {columns.map((column) => {
                          const value = business[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              style={{
                                borderBottom: "3px solid #F8F8FA ",
                              }}
                              onClick={() => handleRedirect(business, data)}
                            >
                              {value}
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
      )}
    </>
  );
};

export default List;
