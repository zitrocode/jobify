import { useContext } from "react";
import markdownit from "markdown-it";

import AppContext from "../../contexts/AppContext";
import "./preview.style.css";

const md = markdownit();

const Preview: React.FC = () => {
  const { code } = useContext(AppContext);

  return (
    <div className="preview">
      <div className="preview--title">
        <h2>Preview</h2>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: md.render(code) }}
      ></div>
    </div>
  );
};

export default Preview;
