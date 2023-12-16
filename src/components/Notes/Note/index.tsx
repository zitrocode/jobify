import "./note.style.css";

type INote = {
  name: string;
  update_date: Date;
  acitve: boolean;
  onClick: () => void;
};

const Note: React.FC<INote> = ({ name, update_date, acitve, onClick }) => {
  return (
    <div className={`note--item ${acitve && "note--active"}`} onClick={onClick}>
      <h3 className="note--title">{name}</h3>
      <p className="note--update">
        {update_date.toDateString()} - {update_date.getHours()}:
        {update_date.getMinutes()}
      </p>
    </div>
  );
};

export default Note;
