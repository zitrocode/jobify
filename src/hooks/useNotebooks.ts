import { useState } from "react";
import * as uuid from "uuid";

import { NotebookStrucure } from "../types/Structure/NotebookStructure";
import { INotebooks } from "../types/Notebooks";

import localStorageServer from "../services/localStorage";

const notebooksData: NotebookStrucure[] = [{ id: "dsfadsfa", name: "Godot" }];

export const useNotebooks = (): INotebooks => {
  const defaultNotes: NotebookStrucure[] = JSON.parse(
    localStorageServer.getItem("notebooks") || JSON.stringify(notebooksData)
  );

  const [notebooks, setNotebooks] = useState<NotebookStrucure[]>(defaultNotes);
  const [current, setCurrent] = useState<string | null>(null);

  const handleChangeCurrent = (id: string | null) => {
    if (notebooks.findIndex((notebook) => notebook.id === id) !== -1) {
      setCurrent(id);
      return;
    }

    setCurrent(null);
  };

  const add = (name: string) => {
    if (name) {
      const newNotebook = { id: uuid.v4(), name };
      const newNotebooks = [...notebooks, newNotebook];
      setNotebooks(newNotebooks);

      // Save notebooks in `localStorage`
      localStorageServer.setItem("notebooks", JSON.stringify(notebooks));
    }
  };
  const update = (id: string, name: string) => {
    const currentNotebook = notebooks.filter((notebook) => notebook.id === id);
    if (currentNotebook.length === 1) {
      currentNotebook[0].name = name;
    }

    const newNotebooks = notebooks.map((notebook) => {
      if (notebook.id === id) {
        return currentNotebook[0];
      }

      return notebook;
    });

    setNotebooks(newNotebooks);

    // Save notebooks in `localStorage`
    localStorageServer.setItem("notebooks", JSON.stringify(notebooks));
  };
  const remove = (id: string) => {
    const newNotebooks = notebooks.filter((notebook) => notebook.id !== id);
    setNotebooks(newNotebooks);

    // Save notebooks in `localStorage`
    localStorageServer.setItem("notebooks", JSON.stringify(notebooks));
  };

  return {
    current: {
      id: current,
      change: handleChangeCurrent,
    },
    get: notebooks,
    add,
    update,
    remove,
  };
};
