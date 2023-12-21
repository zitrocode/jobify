import { useContext, useState } from "react";
import {
  Edit,
  Eye,
  Download,
  CheckCircleSolid,
  PasteClipboard,
  Settings,
  Star,
  Trash,
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

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(editor.code.value);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDeleteNote = () => {
    const findNote = notes.get.find((note) => note.id === notes.current.id);
    if (findNote) {
      notes.update(notes.current.id || "", { isDelete: !findNote.isDelete });
    }
  };

  const handleFavoriteNote = () => {
    const findNote = notes.get.find((note) => note.id === notes.current.id);
    if (findNote) {
      notes.update(notes.current.id || "", {
        isFavorite: !findNote.isFavorite,
      });
    }
  };

  return (
    <div className="controls--content">
      <div className="actions">
        <Button
          icon={editor.isActive ? <Edit /> : <Eye />}
          onChange={editor.toggle}
        />
        <Button icon={<Star />} onChange={handleFavoriteNote} />
        <Button icon={<Trash />} onChange={handleDeleteNote} />
        <Button
          icon={isLoadingCreating ? <CheckCircleSolid /> : <Download />}
          active={isLoadingCreating}
          onChange={handleDownloadFile}
        />
        <Button icon={<PasteClipboard />} onChange={copyContent} />
      </div>
      <div className="controls--author">
        <p>
          Crafted with ❤️ by{" "}
          <a href="https://github.com/zitrocode">zitrocode</a>
        </p>
      </div>

      <div className="actions">
        <Button icon={<Settings />} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Controls;
