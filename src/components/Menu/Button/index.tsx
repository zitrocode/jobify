type IMenuButton = {
  name: string;
  active: boolean;
  total: number;
  icon: React.ReactNode;
  onClick: () => void;
};

const MenuButtom: React.FC<IMenuButton> = ({
  name,
  icon,
  active,
  total,
  onClick,
}) => {
  const handleOnClick = () => {
    onClick();
    // Here code
  };

  return (
    <button
      className={`menu--button ${active && "menu--active"}`}
      onClick={handleOnClick}
    >
      <div className="menu--button-content">
        {icon}
        {name}
      </div>

      <span className="menu--button-total">{total}</span>
    </button>
  );
};

export default MenuButtom;
