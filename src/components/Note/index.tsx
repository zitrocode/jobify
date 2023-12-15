type INote = {
  name: string;
  acitve: boolean;
  onClick: () => void;
};

const Note: React.FC<INote> = ({ name, acitve, onClick }) => {
  return (
    <div className={`note--item ${acitve && "note--active"}`} onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default Note;
