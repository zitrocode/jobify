import { createContext, useState } from "react";
import { OnChange } from "@monaco-editor/react";

interface IAppContext {
  file: {
    name: string;
    change: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  };
  code: string;
  updateCode: OnChange;
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
  const [fileName, setFilename] = useState<string>("default");
  const [code, setCode] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(true);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeCode: OnChange = (currentCode, _) => {
    if (currentCode) {
      setCode(currentCode);
      return;
    }

    setCode("");
  };

  const handleChangeFilename = (
    ev: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFilename(ev.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        file: {
          name: fileName,
          change: handleChangeFilename,
        },
        code,
        updateCode: handleChangeCode,
        edit: { toggle: toggleEdit, isEdit },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
