import { NotebookStrucure } from "./Structure/NotebookStructure";

export interface INotebooks {
  current: {
    id: string | null;
    change: (id: string | null) => void;
  };
  get: NotebookStrucure[];
  add: (name: string) => void;
  update: (id: string, name: string) => void;
  remove: (id: string) => void;
}
