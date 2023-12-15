import { createContext, useState } from "react";
import { OnChange } from "@monaco-editor/react";
import { useNotes } from "../hooks/useNotes";
import { NoteStructure } from "../types/NoteStructure";

interface IAppContext {
  file: {
    name: string;
    change: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  };
  code: string;
  updateCode: OnChange;
  notes: {
    notes: NoteStructure[];
    current: number;
    add: (note: NoteStructure) => void;
    change: (id: number) => void;
  };
  edit: {
    toggle: () => void;
    isEdit: boolean;
  };
}

const AppContext = createContext<IAppContext>({} as IAppContext);

type IAppProvider = {
  children: React.ReactNode;
};
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const { code, notes, currentIdNote, handleChangeNote, handleAddNote } =
    useNotes();
  const [isEdit, setIsEdit] = useState<boolean>(true);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const [filename, setFilename] = useState<string>("default");
  const handleChangeFilename = (
    ev: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFilename(ev.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        file: {
          name: filename,
          change: handleChangeFilename,
        },
        notes: {
          notes,
          current: currentIdNote,
          add: handleAddNote,
          change: handleChangeNote,
        },
        code: code.value || "",
        updateCode: code.change,
        edit: { toggle: toggleEdit, isEdit },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
