import { useState } from "react";
import menuItems from "../components/Menu/menus";

export const useCurrentTools = () => {
  const [currentTool, setCurrentTool] = useState<string>("notes");

  const handleChangeTool = (newTool: string): void => {
    if (menuItems.findIndex((tool) => newTool == tool.name) !== -1) {
      setCurrentTool(newTool);
    }
  };

  return {
    current: currentTool,
    change: handleChangeTool,
  };
};
