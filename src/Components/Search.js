import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
const Search = ({ handleSearchValue }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    handleSearchValue(e.target.value);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setSearchItem("");
  };
  return (
    <div className="search_block">
      <input
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="SEARCH YOUR TEXT"
        className="search-style"
      />
      <span className="search-icon">
        <FaSearch />
      </span>
      <button className="cancel-btn" onClick={handleCancel}>
        <GiCancel />
      </button>
    </div>
  );
};

export default Search;
