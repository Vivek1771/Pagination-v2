import React, { useState, useMemo, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import "../styles/styles.css";
import jsonData from "../json/cities.json";
import column from "../columns/columns.js";
import { useDispatch, useSelector } from "react-redux";
import {
  displayData,
  requestPage,
  removePage,
} from "../services/actions/action";

const Pagination = () => {
  const data = useMemo(() => jsonData.slice(0, 200), []);
  const dataPerPage = useMemo(() => data.slice(0, 10));
  const columns = column();
  let [indexPage, setIndexPage] = useState(0);

  const dispatch = useDispatch();
  const dataFromState = useSelector((state) => state.pG.citiesData);
  useEffect(() => {
    dispatch(displayData(dataPerPage));
  }, []);

  const citiesPerPage = 10;
  const pageCount = Math.ceil(data.length / citiesPerPage) - 1;

  const tableInstance = useTable(
    { columns, data: dataFromState },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = tableInstance;

  return (
    <div style={{ paddingTop: "50px" }}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setIndexPage(indexPage - 1);
            dispatch(removePage(data, indexPage - 1));
          }}
          disabled={indexPage === 0}
        >
          Previous
        </button>{" "}
        <button
          onClick={() => {
            setIndexPage(indexPage + 1);
            dispatch(requestPage(data, indexPage + 1));
          }}
          disabled={indexPage === pageCount}
        >
          Next
        </button>
        <br />
        <b>
          Page {indexPage} of {pageCount}
        </b>
      </div>
    </div>
  );
};

export default Pagination;
