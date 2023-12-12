import { useContext } from "react";
import { Editor as EditorMonaco } from "@monaco-editor/react";

import AppContext from "../../contexts/AppContext";
import "./editor.style.css";

const Editor: React.FC = () => {
  const { updateCode } = useContext(AppContext);

  return (
    <div className="editor">
      <div className="editor--title">
        <h2>Editor</h2>
      </div>
      <EditorMonaco
        height="100%"
        defaultLanguage="markdown"
        defaultValue=""
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={updateCode}
      />
    </div>
  );
};

export default Editor;
