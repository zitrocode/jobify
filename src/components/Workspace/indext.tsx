import Control from "./Controls";
import "./workspace.style.css";

type IChildren = {
  children: React.ReactNode;
};

const WorkSpace: React.FC<IChildren> = ({ children }) => {
  return (
    <div className="workspace--content">
      {children}
      <Control />
    </div>
  );
};

export default WorkSpace;
