import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

function Search() {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} style={{ color: "#f1f2f3" }} />
      <input placeholder="Search" className="search text-center" />
    </div>
  );
}

export default Search;
