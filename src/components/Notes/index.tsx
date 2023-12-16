import { useContext } from "react";
import Note from "./Note";

import AppContext from "../../contexts/AppContext";
import { NoteStructure } from "../../types/NoteStructure";

import "./notes.style.css";
import NotesHeader from "./Header";

const NotesSection: React.FC = () => {
  const { notes } = useContext(AppContext);

  return (
    <div className="notes--content">
      <NotesHeader />
      <div className="notes--items">
        {notes.notes.map((note: NoteStructure, index) => {
          return (
            <Note
              key={index}
              acitve={notes.current === note.id}
              update_date={note.update_date}
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
