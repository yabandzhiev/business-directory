import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

import { columns } from "../../../constants/columns";

import { businessProps } from "../../../types/businessTypes";

import "./Tbody.scss";

interface dataProps {
  data: businessProps[];
}

const TBody = (props: dataProps) => {
  const navigate = useNavigate();
  const data = props.data;

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
            className="tableRow"
            hover
            role="checkbox"
            tabIndex={-1}
            key={business.id}
          >
            {columns.map((column) => {
              const value = business[column.id];
              return (
                <TableCell
                  key={column.id}
                  className="tableCell"
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
