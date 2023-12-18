import { useContext } from "react";
import "./button.style.css";

import { Plus } from "iconoir-react";
import AppContext from "../../../../contexts/AppContext";

const NewNote: React.FC = () => {
  const { notes, notebooks } = useContext(AppContext);

  const name = "Hi";
  const createNewNote = () => {
    notes.add(name, notebooks.current.id);
  };

  return (
    <button className="button-new-note" onClick={createNewNote}>
      <Plus />
    </button>
  );
};

export default NewNote;
