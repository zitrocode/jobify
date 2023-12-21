import { useContext, useEffect, useRef, useState } from "react";
import { XmarkCircleSolid } from "iconoir-react";
import AppContext from "../../../contexts/AppContext";

interface INotebookItem {
  id: string;
  name: string;
  active: boolean;
  onAction: () => void;
}

const NotebookItem: React.FC<INotebookItem> = ({
  id,
  name,
  active,
  onAction,
}) => {
  const { notebooks } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [notebookValue, setNotebookValue] = useState<string>(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Here function for save title
    notebooks.update(id, notebookValue);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNotebookValue(ev.target.value);
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      setIsEditing(false);
      // Here function for save title

      notebooks.update(id, notebookValue);
    }
  };
  return (
    <>
      {isEditing ? (
        <input
          className={`notebook--item ${active && "notebook--active"}`}
          ref={inputRef}
          value={notebookValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div
          className={`notebook--item ${active && "notebook--active"}`}
          onDoubleClick={handleDoubleClick}
          onClick={onAction}
        >
          {notebookValue}

          <button
            className="notebook--delete"
            onClick={() => notebooks.remove(id)}
          >
            {<XmarkCircleSolid />}
          </button>
        </div>
      )}
    </>
  );
};

export default NotebookItem;
