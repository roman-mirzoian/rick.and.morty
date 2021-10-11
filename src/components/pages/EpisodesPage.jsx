import * as React from "react";
import { useState, useEffect } from "react";

import { styled } from "@material-ui/core/styles";
import TableCell, { tableCellClasses } from "@material-ui/core/TableCell";

import TablePage from "../UI/TablePage";
import DataService from "../API/DataService";
import Loader from "../UI/Loader/Loader";

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
    id: "episode",
    numeric: true,
    disablePadding: false,
    label: "Episode",
  },
  {
    id: "air_date",
    numeric: true,
    disablePadding: false,
    label: "Air date",
  },
];

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = React.useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    DataService.getEpisodes(page + 1).then((response) => {
      setEpisodes(response);
      setIsDataLoading(false);
    });
    DataService.getUnitsCount("episode").then((count) => {
      setPagesCount(count);
    });
  }, [page]);

  return (
    <div>
      {isDataLoading ? (
        <Loader />
      ) : (
        <TablePage
          headCells={headCells}
          baseOrderName={"episodes"}
          content={episodes}
          page={page}
          setPage={setPage}
          pagesCount={pagesCount}
          StyledTableCell={StyledTableCell}
        />
      )}
    </div>
  );
};

export default EpisodesPage;
