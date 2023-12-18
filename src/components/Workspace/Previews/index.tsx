import { useContext } from "react";
import MarkdowPreview from "@uiw/react-markdown-preview";

import AppContext from "../../../contexts/AppContext";
import "./preview.style.css";

const Preview: React.FC = () => {
  const { editor } = useContext(AppContext);

  return (
    <div className="preview">
      <div className="content">
        <MarkdowPreview source={editor.code.value} />
      </div>
    </div>
  );
};

export default Preview;
