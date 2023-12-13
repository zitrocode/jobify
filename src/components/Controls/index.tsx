import { useContext, useState } from "react";
import { Edit, Eye, Download, CheckCircleSolid } from "iconoir-react";

import AppContext from "../../contexts/AppContext";
import createFile from "../../utils/newFile";

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
      <div className="control--change-name">
        <label>Filename</label>
        <input
          value={file.name}
          onChange={file.change}
          placeholder="Enter your filename"
        />
      </div>
      <div className="actions">
        <button className="control--button" onClick={edit.toggle}>
          {edit.isEdit ? <Eye /> : <Edit />}
        </button>

        <button
          className={`control--button ${
            isLoadingCreating ? "icon--green" : "icon--default"
          }`}
          onClick={handleDownloadFile}
        >
          {isLoadingCreating ? <CheckCircleSolid /> : <Download />}
        </button>
      </div>
    </div>
  );
};

export default Control;
