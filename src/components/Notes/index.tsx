import { useContext } from "react";
import Note from "../Note";
import Search from "../Search";

import AppContext from "../../contexts/AppContext";
import { NoteStructure } from "../../types/NoteStructure";

import "./notes.style.css";

const NotesSection: React.FC = () => {
  const { notes } = useContext(AppContext);

  return (
    <div className="notes--content">
      <Search />
      <div className="notes--items">
        {notes.notes.map((note: NoteStructure, index) => {
          return (
            <Note
              key={index}
              acitve={notes.current === note.id}
              name={note.name}
              onClick={() => {
                notes.change(note.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NotesSection;
