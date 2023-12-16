import "./search.style.css";

const Search: React.FC = () => {
  return (
    <div className="notes--search-content">
      <input type="text" placeholder="Search a note" />
    </div>
  );
};

export default Search;
