import React, { useState } from "react";
import jsonData from "../json/cities.json";
import ReactPaginate from "react-paginate";
import "./styles.css";

const Cities = () => {
  const cities = jsonData.slice(0, 200);
  const [pageNumber, setPageNumber] = useState(0);

  const citiesPerPage = 10;
  const pagesVisited = pageNumber * citiesPerPage;
  // console.log(pagesVisited);
  //30-40
  const displayCities = cities
    .slice(pagesVisited, pagesVisited + citiesPerPage)
    .map((ct, index) => {
      return (
        <div key={index}>
          <table>
            <tbody>
              <tr>
                <td>{ct.name}</td>
                <td>{ct.state}</td>
                <td>{ct.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });

  const pageCount = Math.ceil(cities.length / citiesPerPage);
  // console.log(pageCount);

  const handleOnPageChange = ({ selected }) => {
    // console.log(selected);
    setPageNumber(selected);
  };

  return (
    <div className="cities">
      <table>
        <tbody>
          <tr>
            <td>
              <strong>City</strong>
            </td>
            <td>
              <strong>State</strong>
            </td>
            <td>
              <strong>Country</strong>
            </td>
          </tr>
        </tbody>
      </table>
      {displayCities}
      <div
        style={{
          paddingTop: "60px",
          marginLeft: "200px",
        }}
      >
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handleOnPageChange}
          containerClassName={"pageBtn"}
          disabledClassName={"pageDisabled"}
          activeClassName={"pageActive"}
        />
      </div>
    </div>
  );
};

export default Cities;
