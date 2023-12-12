import { createContext, useState } from "react";
import { OnChange } from "@monaco-editor/react";

interface IAppContext {
  code: string;
  updateCode: OnChange;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

type IAppProvider = {
  children: React.ReactNode;
};
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [code, setCode] = useState<string>("");

  const handleChangeCode: OnChange = (currentCode, ev) => {
    if (currentCode) {
      setCode(currentCode);
      return;
    }

    setCode("");
  };

  return (
    <AppContext.Provider value={{ code, updateCode: handleChangeCode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
