import { Plus } from "iconoir-react";

type IAppButton = {
  onAction: () => void;
};

const AddButton: React.FC<IAppButton> = ({ onAction }) => {
  return (
    <button onClick={onAction} className="menuItem--add-button">
      {<Plus />}
    </button>
  );
};

export default AddButton;
