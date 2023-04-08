import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ dataFetch }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    value !== "" && dataFetch(value);
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <div className="search-bar">
      <form className="form" onSubmit={handleSubmit}>
        <label>Search Here : </label>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
