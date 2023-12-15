import { useContext } from "react";
import "./button.style.css";

import { PlusSquare } from "iconoir-react";
import AppContext from "../../contexts/AppContext";
import { NoteStructure } from "../../types/NoteStructure";

const NewButton: React.FC = () => {
  const { notes } = useContext(AppContext);

  const newNote: NoteStructure = {
    id: notes.notes.length,
    name: "New note",
    code: "",
    isFavorite: false,
  };

  const createNewNote = () => {
    notes.add(newNote);
  };

  return (
    <button className="button-new-note" onClick={createNewNote}>
      <PlusSquare />
      New Note
    </button>
  );
};

export default NewButton;
