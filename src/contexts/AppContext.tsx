import { createContext, useEffect } from "react";
import { useNotes } from "../hooks/useNotes";

import { IAppContext, IAppProvider } from "../types/AppContext";
import { useNotebooks } from "../hooks/useNotebooks";
import { useCode } from "../hooks/useCode";
import { useEdit } from "../hooks/useEdit";
import { useSearchNote } from "../hooks/useSearch";

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const code = useCode();
  const edit = useEdit();
  const notes = useNotes();
  const search = useSearchNote();
  const notebooks = useNotebooks();

  useEffect(() => {
    const findNote = notes.get.findIndex(
      (note) => note.id === notes.current.id
    );
    if (findNote !== -1) {
      const name = notes.get[findNote].name;
      const oldCode = notes.get[findNote].code;
      if (notes.current.id)
        notes.update(notes.current.id, name, code.value || oldCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code.value]);

  useEffect(() => {
    // Change value code
    const findNote = notes.get.find((note) => notes.current.id === note.id);

    if (findNote) {
      code.set(findNote.code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes.current.id]);

  return (
    <AppContext.Provider
      value={{
        editor: {
          isActive: edit.isActive,
          toggle: edit.handleToggleIsActive,
          code: { value: code.value || "", change: code.change, set: code.set },
        },
        notes: {
          current: {
            id: notes.current.id,
            change: notes.current.change,
          },
          get: notes.get,
          add: notes.add,
          update: notes.update,
          remove: notes.remove,
        },
        notebooks: {
          current: {
            id: notebooks.current.id,
            change: notebooks.current.change,
          },
          get: notebooks.get,
          add: notebooks.add,
          update: notebooks.update,
          remove: notebooks.remove,
        },

        search: {
          value: search.search || "",
          change: search.handleSearchNote,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
