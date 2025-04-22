import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <select name="searchBy" id="searchBy" className="search-select">
        <option value="ingredient">By Ingredient</option>
        <option value="condition">By Condition</option>
      </select>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search.."
        className="search-input"
        required
        max={20}
      />
      <button type="submit" className="search-btn">
        <FaSearch className="search-icon" />
      </button>
    </>
  );
};

export default SearchBar;
