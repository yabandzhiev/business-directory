import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";

import { getData } from "../../api/requests";

import TableHeader from "../Table/THeader/THeader";
import TBody from "../Table/TBody/TBody";

import "./List.scss";

const List = () => {
  let { status, data, error } = useQuery("getData", getData);

  if (status === "loading") {
    return (
      <Box className="loadingScreen">
        <CircularProgress />
      </Box>
    );
  }
  if (status === "error" && error instanceof Error) {
    return <h2 className="error-message">Error: {error.message}</h2>;
  }

  return (
    <>
      {data && (
        <div className="table">
          <Paper className="tablePaper">
            <TableContainer className="tableContainer">
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
