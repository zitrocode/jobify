import { useContext } from "react";
import { Editor as MoEditor } from "@monaco-editor/react";

import AppContext from "../../contexts/AppContext";
import "./editor.style.css";

const Editor: React.FC = () => {
  const { code, updateCode } = useContext(AppContext);

  return (
    <div className="editor">
      <MoEditor
        height="100%"
        defaultLanguage="markdown"
        defaultValue=""
        value={code}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={updateCode}
      />
    </div>
  );
};

export default Editor;
