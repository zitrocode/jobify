import Modal from "../Modal";
import "./layout.style.css";

type ILayout = {
  children: React.ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className="wrapper">{children}</div>
      {/* <Modal onClose={() => {}} /> */}
    </>
  );
};

export default Layout;
