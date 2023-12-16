import { useContext } from "react";
import "./button.style.css";

import { Plus } from "iconoir-react";
import AppContext from "../../../../contexts/AppContext";
import { NoteStructure } from "../../../../types/NoteStructure";

const NewNote: React.FC = () => {
  const { notes } = useContext(AppContext);

  const newNote: NoteStructure = {
    id: notes.notes.length,
    name: "New note",
    code: "",
    notebook_id: null,
    date: new Date(),
    update_date: new Date(),
    isFavorite: false,
    isDelete: false,
  };

  const createNewNote = () => {
    notes.add(newNote);
  };

  return (
    <button className="button-new-note" onClick={createNewNote}>
      <Plus />
    </button>
  );
};

export default NewNote;
