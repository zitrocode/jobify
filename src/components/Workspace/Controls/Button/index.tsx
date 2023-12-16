import "./button.style.css";

interface IButton {
  icon: React.ReactNode;
  onChange: () => void;
  active?: boolean;
}

const Button: React.FC<IButton> = ({ icon, onChange, active }) => {
  return (
    <button
      onClick={onChange}
      className={`control--button ${active ? "icon--green" : ""}`}
    >
      {icon}
    </button>
  );
};

export default Button;
