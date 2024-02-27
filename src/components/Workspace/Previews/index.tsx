import { useContext } from "react";
import MarkdownIt from "markdown-it";
import MDHighlight from "markdown-it-highlightjs";

import AppContext from "../../../contexts/AppContext";
import "./preview.style.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
});

md.use(MDHighlight, { inline: true });

const Preview: React.FC = () => {
  const { editor } = useContext(AppContext);
  const codeRender = md.render(editor.code.value);

  return (
    <div className="preview">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: codeRender }}
      ></div>
    </div>
  );
};

export default Preview;
