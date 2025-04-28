import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { toast } from "react-toastify";

const SearchBar = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!inputRef.current) {
      return;
    }
    const trimmedValue = inputRef.current.value.trim();
    if (trimmedValue) {
      inputRef.current.value = trimmedValue;
    } else {
      inputRef.current.value = ""; // clean up the input
      toast.error("Please enter a search term");
    }
  };
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
        max={20}
        ref={inputRef}
      />
      <button type="submit" className="search-btn" onClick={handleSubmit}>
        <FaSearch className="search-icon" />
      </button>
    </>
  );
};

export default SearchBar;
