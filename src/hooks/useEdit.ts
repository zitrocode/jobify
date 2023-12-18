import { useState } from "react";

export const useEdit = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleToggleIsActive = () => {
    setIsActive(!isActive);
  };

  return { isActive, handleToggleIsActive };
};
