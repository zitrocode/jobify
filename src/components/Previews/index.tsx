import { useContext } from "react";
import MarkdowPreview from "@uiw/react-markdown-preview";

import AppContext from "../../contexts/AppContext";
import "./preview.style.css";

const Preview: React.FC = () => {
  const { code } = useContext(AppContext);

  return (
    <div className="preview">
      <div className="content">
        <MarkdowPreview
          source={code}
          style={{ height: "calc(100vh - 40px)" }}
        />
      </div>
    </div>
  );
};

export default Preview;
