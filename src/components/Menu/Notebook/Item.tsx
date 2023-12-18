import { useEffect, useRef, useState } from "react";

interface INotebookItem {
  name: string;
  active: boolean;
  onAction: () => void;
}

const NotebookItem: React.FC<INotebookItem> = ({ name, active, onAction }) => {
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
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNotebookValue(ev.target.value);
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      setIsEditing(false);
      // Here function for save title
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
        </div>
      )}
    </>
  );
};

export default NotebookItem;
