import "./search.style.css";
import { useContext } from "react";
import AppContext from "../../../../contexts/AppContext";
import { Search as IconSearch } from "iconoir-react";

const Search: React.FC = () => {
  const { search } = useContext(AppContext);

  return (
    <div className="notes--search-content">
      <span className="notes--search-icon">
        <IconSearch />
      </span>
      <input
        type="text"
        required
        placeholder="Search a note"
        value={search.value || ""}
        onChange={search.change}
      />
    </div>
  );
};

export default Search;
