import { useContext } from "react";
import "./notebook.style.css";
import AppContext from "../../../contexts/AppContext";
import NotebookItem from "./Item";

const NotebookList: React.FC = () => {
  const { notebooks } = useContext(AppContext);

  return (
    <div className="notebook--list">
      {notebooks.get.map((notebook, index) => {
        return (
          <NotebookItem
            key={index}
            name={notebook.name}
            active={notebook.id === notebooks.current.id}
            onAction={() => notebooks.current.change(notebook.id)}
          />
        );
      })}
    </div>
  );
};

export default NotebookList;
