import { useContext } from "react";
import { Editor as MoEditor } from "@monaco-editor/react";

import AppContext from "../../../contexts/AppContext";
import "./editor.style.css";

const Editor: React.FC = () => {
  const { editor } = useContext(AppContext);

  return (
    <div className="editor">
      <MoEditor
        width="100%"
        height="calc(100vh - 42px)"
        defaultLanguage="markdown"
        defaultValue=""
        value={editor.code.value}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={editor.code.change}
      />
    </div>
  );
};

export default Editor;
