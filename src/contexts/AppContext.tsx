import { createContext, useEffect } from "react";
import { useNotes } from "../hooks/useNotes";

import { IAppContext, IAppProvider } from "../types/AppContext";
import { useNotebooks } from "../hooks/useNotebooks";
import { useCode } from "../hooks/useCode";
import { useEdit } from "../hooks/useEdit";
import { useSearchNote } from "../hooks/useSearch";
import { useCurrentTools } from "../hooks/useCurrentTool";

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const code = useCode();
  const edit = useEdit();
  const notes = useNotes();
  const search = useSearchNote();
  const notebooks = useNotebooks();
  const tools = useCurrentTools();

  useEffect(() => {
    const findNote = notes.get.findIndex(
      (note) => note.id === notes.current.id
    );
    if (findNote !== -1) {
      const oldCode = notes.get[findNote].code;
      const oldName = notes.get[findNote].name;
      let name: string;

      if (code.value) {
        name = code.value.split("\n")[0].replace("#", "").replace("# ", "");
        name = name.length <= 30 ? name : name.slice(0, 30);
      } else {
        name = "New note";
      }

      if (notes.current.id) {
        notes.update(notes.current.id, {
          code: code.value || oldCode,
          name: name || oldName,
        });
      }
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
        tool: {
          current: tools.current,
          change: tools.change,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
