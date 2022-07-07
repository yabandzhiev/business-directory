import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

import { columns } from "../../../constants/columns";

import { businessProps } from "../../../types/businessTypes";

interface dataProps {
  data: businessProps[];
}

const TBody = (props: dataProps) => {
  const data = props.data;
  const navigate = useNavigate();

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
  );
};

export default TBody;
