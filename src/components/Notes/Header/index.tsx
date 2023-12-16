import NewNote from "./NewNote";
import Search from "./Search";

import "./header.style.css";

const NotesHeader: React.FC = () => {
  return (
    <div className="notes--header">
      <div className="notes--header-info">
        <h2>All notes</h2>
        <NewNote />
      </div>

      <Search />
    </div>
  );
};

export default NotesHeader;
