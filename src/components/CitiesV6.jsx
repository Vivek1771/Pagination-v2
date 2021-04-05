import React from "react";
import jsonData from "../json/cities.json";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const Cities = () => {
  const cities = jsonData.slice(0, 200);

  const columns = [
    {
      Header: "City",
      id: "city",
      accessor: "name",
    },
    {
      Header: "State",
      id: "state",
      accessor: "state",
    },
    {
      Header: "Country",
      id: "country",
      accessor: "country",
    },
  ];

  return (
    <div>
      <ReactTable
        data={cities}
        columns={columns}
        defaultPageSize={10}
        pageSizeOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default Cities;

// With React Paginate npm package:-

// import ReactPaginate from "react-paginate";
// import "./styles.css";

// const [pageNumber, setPageNumber] = useState(0);

// const citiesPerPage = 10;
// const pagesVisited = pageNumber * citiesPerPage;
// // console.log(pagesVisited);
// //30-40
// const displayCities = cities
//   .slice(pagesVisited, pagesVisited + citiesPerPage)
//   .map((ct, index) => {
//     return (
//       <div key={index}>
//         <table>
//           <tbody>
//             <tr>
//               <td>{ct.name}</td>
//               <td>{ct.state}</td>
//               <td>{ct.country}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   });

// const pageCount = Math.ceil(cities.length / citiesPerPage);
// // console.log(pageCount);

// const handleOnPageChange = ({ selected }) => {
//   // console.log(selected);
//   setPageNumber(selected);
// };

// return (
//   <div className="cities">
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <strong>City</strong>
//           </td>
//           <td>
//             <strong>State</strong>
//           </td>
//           <td>
//             <strong>Country</strong>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     {displayCities}
//     <div
//       style={{
//         paddingTop: "60px",
//         marginLeft: "200px",
//       }}
//     >
//       <ReactPaginate
//         previousLabel={"Prev"}
//         nextLabel={"Next"}
//         pageCount={pageCount}
//         onPageChange={handleOnPageChange}
//         containerClassName={"pageBtn"}
//         disabledClassName={"pageDisabled"}
//         activeClassName={"pageActive"}
//       />
//     </div>
//   </div>
