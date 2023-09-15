"use client";

import { SearchManufacturer } from ".";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
