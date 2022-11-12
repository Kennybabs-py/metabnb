import React from "react";

import "./styles.scss";

export default function SearchInput() {
  return (
    <div className="searchinput__box">
      <input type="text" placeholder="Search for location" />
      <button>Search</button>
    </div>
  );
}
