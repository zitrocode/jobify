import { useContext, useState } from "react";
import { Edit, Eye, Download, CheckCircleSolid } from "iconoir-react";

import AppContext from "../../contexts/AppContext";
import createFile from "../../utils/newFile";
import Button from "./Button";

import "./controls.style.css";

const Control: React.FC = () => {
  const { edit, file, code } = useContext(AppContext);
  const [isLoadingCreating, setIsLoadingCreating] = useState<boolean>(false);

  const handleDownloadFile = () => {
    const currentFile = createFile(code, file.name);

    if (currentFile) {
      const href = URL.createObjectURL(currentFile);

      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${file.name}.md`);
      document.body.appendChild(link);
      link.click();

      setIsLoadingCreating(true);
      setInterval(() => setIsLoadingCreating(false), 10000);

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    }
  };

  return (
    <div className="controls--content">
      <div className="controls--author">
        <p>
          Created by <a href="https://github.com/zitrocode">zitrocode</a>
        </p>
      </div>

      <div className="actions">
        <Button
          icon={edit.isEdit ? <Eye /> : <Edit />}
          onChange={edit.toggle}
        />

        <Button
          icon={isLoadingCreating ? <CheckCircleSolid /> : <Download />}
          active={isLoadingCreating}
          onChange={handleDownloadFile}
        />
      </div>
    </div>
  );
};

export default Control;
