import { useState } from "react";
import MenuButtom from "./Button";
import menuItems from "./menus";
import NewButton from "../NewNote";

const Menu: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<string>("Notes");

  const handleChangeTool = (newTool: string): void => {
    if (menuItems.findIndex((tool) => newTool == tool.name) !== -1) {
      setCurrentTool(newTool);
    }
  };

  return (
    <div className="menu--notes">
      <h1 className="menu--title">Notes App</h1>
      <NewButton />
      {menuItems.map((menu, index) => {
        return (
          <MenuButtom
            key={index}
            active={currentTool == menu.name}
            name={menu.name}
            icon={<menu.Icon />}
            onClick={() => handleChangeTool(menu.name)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
