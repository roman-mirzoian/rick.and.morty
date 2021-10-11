import * as React from "react";

import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { visuallyHidden } from "@material-ui/utils";

import { stableSort, getComparator } from "../../utils/pages";
import { Divider } from "@material-ui/core";

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells, StyledTableCell } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable({
  headCells,
  baseOrderName,
  content,
  page,
  setPage,
  pagesCount,
  StyledTableCell,
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(baseOrderName);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: "60%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={content.length}
              headCells={headCells}
              StyledTableCell={StyledTableCell}
            />
            <TableBody>
              {stableSort(content, getComparator(order, orderBy)).map(
                (content, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={content[headCells[0].id]}
                    >
                      <TableCell component="th" id={index} scope="row">
                        "{content[headCells[0].id]}"
                      </TableCell>
                      <TableCell align="right">
                        {content[headCells[1].id]}
                      </TableCell>
                      <TableCell align="right">
                        {content[headCells[2].id]}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20]}
          component="div"
          count={pagesCount}
          rowsPerPage={20}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
}
