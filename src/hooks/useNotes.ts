import { useEffect, useState } from "react";
import { NoteStructure } from "../types/NoteStructure";
import { useCode } from "./useCode";

const defaultValue: NoteStructure[] = [
  {
    id: 0,
    name: "Note Hi",
    code: "# Hello world! :D",
    notebook_id: null,
    date: new Date(),
    update_date: new Date(),
    isFavorite: false,
    isDelete: false,
  },
  {
    id: 1,
    name: "Note Dev's",
    code: "# Hello Dev's! :D",
    notebook_id: null,
    date: new Date(),
    update_date: new Date(),
    isFavorite: false,
    isDelete: false,
  },
];

export const useNotes = () => {
  const [notes, setNotes] = useState<NoteStructure[]>(defaultValue);
  const [currentIdNote, setCurrentIdNote] = useState<number>(0);

  const [oldCode, setOldCode] = useState<string>(notes[0].code);
  const [prevIdNote, setPrevIdNote] = useState<number>(currentIdNote);

  const { code } = useCode();

  const handleChangeNote = (id: number) => {
    setOldCode(code.value || "");

    if (notes.findIndex((currentNote) => currentNote.id === id) !== -1) {
      setPrevIdNote(currentIdNote);
      setCurrentIdNote(id);
    }
  };

  const handleAddNote = (note: NoteStructure) => {
    setNotes([...notes, note]);
  };

  useEffect(() => {
    const newNotes = notes.map((note) =>
      note.id === prevIdNote ? { ...note, code: oldCode || "" } : note
    );
    setNotes(newNotes);

    const currentNote = notes.find((note) => note.id === currentIdNote);
    if (currentNote) {
      code.set(currentNote.code);
    }
  }, [currentIdNote]);

  return { code, notes, currentIdNote, handleChangeNote, handleAddNote };
};
