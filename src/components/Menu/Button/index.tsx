type IMenuButton = {
  name: string;
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
};

const MenuButtom: React.FC<IMenuButton> = ({ name, icon, active, onClick }) => {
  const handleOnClick = () => {
    onClick();
    // Here code
  };

  return (
    <button
      className={`menu--button ${active && "menu--active"}`}
      onClick={handleOnClick}
    >
      {icon}
      {name}
    </button>
  );
};

export default MenuButtom;
