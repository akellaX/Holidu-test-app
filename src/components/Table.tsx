import {
  TableCell,
  Table as MateriaTable,
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
} from "@mui/material";
import React from "react";
import { useTable } from "react-table";
import Paper from "@mui/material/Paper";

export const Table = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () =>
      [
        {
          Header: "Column 1",
          accessor: "col1",
        },
        {
          Header: "Column 2",
          accessor: "col2",
        },
      ] as any,
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <TableContainer component={Paper}>
      <MateriaTable
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        {...getTableProps()}
      >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MateriaTable>
    </TableContainer>
  );
};
