import { useContext, useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import menuItems from "./menus";

import "./menu.style.css";
import AppContext from "../../contexts/AppContext";
import AddButton from "./AddButton";

interface MenuTotals {
  [key: string]: number;
}

const Menu: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<string>("notes");
  const { notes, notebooks } = useContext(AppContext);

  const menuTotals: MenuTotals = {
    notes: notes.get.filter((note) => !note.isDelete).length,
    trash: notes.get.filter((note) => note.isDelete).length,
    favorites: notes.get.filter((note) => note.isFavorite && !note.isDelete)
      .length,
  };

  const handleChangeTool = (newTool: string): void => {
    if (menuItems.findIndex((tool) => newTool == tool.name) !== -1) {
      setCurrentTool(newTool);
    }
  };

  useEffect(() => {
    if (currentTool === "notes") {
      if (notebooks.current.id !== null) {
        notebooks.current.change(null);
      }
    }
  }, [currentTool]);

  return (
    <div className="menu--notes">
      <h1 className="menu--title">Notes App</h1>
      {menuItems.map((menu, index) => {
        return (
          <MenuButton
            key={index}
            active={currentTool == menu.name}
            name={menu.name}
            total={menu.name ? menuTotals[menu.name] : null}
            icon={<menu.Icon />}
            rightIcon={
              menu.name === "notebook" ? (
                <AddButton onAction={() => console.log("click")} />
              ) : (
                ""
              )
            }
            onClick={() => handleChangeTool(menu.name)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
