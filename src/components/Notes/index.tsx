import { useContext, useRef } from "react";
import Note from "./Note";

import AppContext from "../../contexts/AppContext";
import { NoteStructure } from "../../types/Structure/NoteStructure";

import "./notes.style.css";
import NotesHeader from "./Header";

const NotesSection: React.FC = () => {
  const { notes, notebooks, search, tool } = useContext(AppContext);
  let newNotes: NoteStructure[];

  if (search.value) {
    newNotes = notes.get.filter((note) =>
      note.name.toLowerCase().includes(search.value)
    );
  } else {
    newNotes = notes.get;
  }

  if (tool.current === "notes") {
    newNotes = newNotes.filter((note) => !note.isDelete);
  } else if (tool.current === "trash") {
    newNotes = newNotes.filter((note) => note.isDelete);
  } else if (tool.current === "favorites") {
    newNotes = newNotes.filter((note) => note.isFavorite && !note.isDelete);
  } else if (tool.current === "notebooks") {
    if (notebooks.current.id) {
      newNotes = newNotes.filter(
        (note) => note.notebook_id === notebooks.current.id && !note.isDelete
      );
    } else {
      newNotes = newNotes.filter((note) => note.notebook_id && !note.isDelete);
    }
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
