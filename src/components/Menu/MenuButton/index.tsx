import NotebookList from "../Notebook";

type IMenuButton = {
  name: string;
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
  rightIcon?: React.ReactNode;
  total?: number | null;
};

const MenuButton: React.FC<IMenuButton> = ({
  name,
  icon,
  active,
  onClick,
  rightIcon,
  total,
}) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <>
      <div
        className={`menu--button ${active && "menu--active"}`}
        onClick={handleOnClick}
      >
        <div className="menu--button-content">
          {icon}
          {name}
        </div>

        {rightIcon ? (
          rightIcon
        ) : (
          <span className="menu--button-total">{total}</span>
        )}
      </div>
      {name === "notebooks" && active && <NotebookList />}
    </>
  );
};

export default MenuButton;
