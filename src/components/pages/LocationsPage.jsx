import * as React from "react";
import { useState, useEffect } from "react";

import { styled } from "@material-ui/core/styles";
import TableCell, { tableCellClasses } from "@material-ui/core/TableCell";

import TablePage from "./TablePage";
import DataService from "../API/DataService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.common.white,
    fontSize: 20,
  },
}));

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "dimension",
    numeric: true,
    disablePadding: false,
    label: "Dimension",
  },
];

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = React.useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    DataService.getLocations(page + 1).then(response => {
      setEpisodes(response);
    });
    DataService.getUnitsCount('location').then(count => {
      setPagesCount(count);
    })
  }, [page]);

  return (
    <TablePage
      headCells={headCells}
      baseOrderName={""}
      content={episodes}
      page={page}
      setPage={setPage}
      pagesCount={pagesCount}
      StyledTableCell={StyledTableCell}
    />
  );
};

export default EpisodesPage;
