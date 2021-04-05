// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cities from "./components/CitiesV6.jsx"
import Pagination from "./components/Pagination.jsx"

const App = () => {
  return (
    <div className="App">
      <h3>With React table</h3>
      <Pagination />
      <br /> <br />
      <h3>With React table version 6:</h3>
      <Cities />
    </div>
  );
}

export default App;






