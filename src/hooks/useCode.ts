import { useState } from "react";
import { OnChange } from "@monaco-editor/react";

export const useCode = () => {
  const [code, setCode] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeCode: OnChange = (currentCode, _) => {
    if (currentCode) {
      setCode(currentCode);
      return;
    }

    setCode("");
  };

  return {
    value: code,
    set: setCode,
    change: handleChangeCode,
  };
};
