import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";

import { getData } from "../../api/requests";

import "./List.scss";
import TableHeader from "../Table/THeader/THeader";
import TBody from "../Table/TBody/TBody";

const List = () => {
  const { status, data, error } = useQuery("getData", getData);

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "92vh",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (status === "error" && error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

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
                <TableHeader />
                <TBody data={data} />
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}
    </>
  );
};

export default List;
