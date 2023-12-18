import { useContext, useState } from "react";
import {
  Edit,
  Eye,
  Download,
  CheckCircleSolid,
  ViewColumns2,
  PasteClipboard,
  SunLight,
  Settings,
} from "iconoir-react";

import AppContext from "../../../contexts/AppContext";
import createFile from "../../../utils/newFile";
import Button from "./Button";

import "./controls.style.css";

const Controls: React.FC = () => {
  const { editor, notes } = useContext(AppContext);
  const [isLoadingCreating, setIsLoadingCreating] = useState<boolean>(false);

  const handleDownloadFile = () => {
    const findNote = notes.get.find((note) => note.id === notes.current.id);
    if (findNote) {
      const currentFile = createFile(editor.code.value, findNote.name);

      if (currentFile) {
        const href = URL.createObjectURL(currentFile);

        // create "a" HTML element with href to file & click
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", `${findNote.name}.md`);
        document.body.appendChild(link);
        link.click();

        setIsLoadingCreating(true);
        setInterval(() => setIsLoadingCreating(false), 10000);

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      }
    }
  };

  return (
    <div className="controls--content">
      <div className="actions">
        <Button
          icon={editor.isActive ? <Edit /> : <Eye />}
          onChange={editor.toggle}
        />

        <Button
          icon={<ViewColumns2 />}
          active={isLoadingCreating}
          onChange={handleDownloadFile}
        />
        <Button
          icon={<PasteClipboard />}
          active={isLoadingCreating}
          onChange={handleDownloadFile}
        />
      </div>
      <div className="controls--author">
        <p>
          Crafted with ❤️ by{" "}
          <a href="https://github.com/zitrocode">zitrocode</a>
        </p>
      </div>

      <div className="actions">
        <p className="update-date">Date file...</p>
        <Button
          icon={isLoadingCreating ? <CheckCircleSolid /> : <Download />}
          active={isLoadingCreating}
          onChange={handleDownloadFile}
        />

        <Button icon={<SunLight />} onChange={() => {}} />
        <Button icon={<Settings />} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Controls;
