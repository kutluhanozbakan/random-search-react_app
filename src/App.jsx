import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bulma/css/bulma.css";
import SearchHeader from "./SearchHeader";
import axios from "axios";
import searchImages from "./api";

function App() {
 
  const handleSubmit = (term) => {
    searchImages(term);
  };
  return (
    <>
      <div className="App">
        <SearchHeader search={handleSubmit} />
      </div>
    </>
  );
}

export default App;
