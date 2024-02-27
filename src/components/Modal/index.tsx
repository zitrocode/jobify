import "./modal.style.css";

interface IModel {
  onClose: () => void;
}

const Modal: React.FC<IModel> = ({ onClose }) => {
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal">
        <div className="modal--header">
          <h2>Configuration</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal--content">
          <div className="modal--menu">
            <ul>
              <li>General</li>
              <li>Editor</li>
              <li>Preview</li>
            </ul>
          </div>
          <div className="modal--info">Options</div>
        </div>
        <div className="modal--footer">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
