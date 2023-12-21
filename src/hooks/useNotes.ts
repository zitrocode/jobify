import { useState } from "react";
import * as uuid from "uuid";

import { INotes } from "../types/Notes";
import { NoteStructure } from "../types/Structure/NoteStructure";
import localStorageServer from "../services/localStorage";

export const useNotes = (): INotes => {
  // localStorageServer.removeItem("notes");

  const defaultNotes: NoteStructure[] = JSON.parse(
    localStorageServer.getItem("notes") || "[]"
  );

  const [notes, setNotes] = useState<NoteStructure[]>(defaultNotes);
  const [current, setCurrent] = useState<string | null>(notes[0]?.id);

  const handleChageCurrent = (id: string | null) => {
    if (notes.findIndex((note) => note.id === id) !== -1) {
      setCurrent(id);
      return;
    }

    setCurrent(null);
  };

  const add = (name: string, notebook: string | null): void => {
    if (name) {
      const currentDate = new Date();

      const newNote: NoteStructure = {
        id: uuid.v4(),
        code: "",
        name,
        date: currentDate,
        update_date: currentDate,
        notebook_id: notebook ? notebook : null,
        isFavorite: false,
        isDelete: false,
      };

      const newNotes = [...notes, newNote];
      setNotes(newNotes);

      // Save note in `localStorage`
      localStorageServer.setItem("notes", JSON.stringify(notes));
    }
  };

  const update = (
    id: string,
    options: {
      name?: string;
      code?: string;
      isDelete?: boolean;
      isFavorite?: boolean;
    }
  ) => {
    const currentNote = notes.filter((note) => note.id === id);
    if (currentNote.length === 1) {
      currentNote[0].name = options.name || currentNote[0].name;
      currentNote[0].code = options.code || currentNote[0].code;
      currentNote[0].isDelete = options.isDelete || currentNote[0].isDelete;
      currentNote[0].isFavorite =
        options.isFavorite || currentNote[0].isFavorite;
      currentNote[0].update_date = new Date();
    }

    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return currentNote[0];
      }

      return note;
    });

    setNotes(newNotes);

    // Save note in `localStorage`
    localStorageServer.setItem("notes", JSON.stringify(notes));
  };

  const remove = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

    // Save note in `localStorage`
    localStorageServer.setItem("notes", JSON.stringify(notes));
  };

  return {
    current: {
      id: current,
      change: handleChageCurrent,
    },
    get: notes,
    add,
    update,
    remove,
  };
};
