import { useContext } from "react";
import Note from "./Note";

import AppContext from "../../contexts/AppContext";
import { NoteStructure } from "../../types/Structure/NoteStructure";

import "./notes.style.css";
import NotesHeader from "./Header";

const NotesSection: React.FC = () => {
  const { notes, notebooks, search } = useContext(AppContext);
  let newNotes = search.value
    ? notes.get.filter((note) => note.name.toLowerCase().includes(search.value))
    : notes.get;

  if (notebooks.current.id) {
    newNotes = notes.get.filter(
      (note) => note.notebook_id === notebooks.current.id
    );
  }

  return (
    <div className="notes--content">
      <NotesHeader />
      <div className="notes--items">
        {newNotes.map((note: NoteStructure) => {
          return (
            <Note
              key={note.id}
              acitve={notes.current.id === note.id}
              update_date={note.update_date}
              name={note.name}
              onClick={() => {
                notes.current.change(note.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NotesSection;
