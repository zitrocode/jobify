import { NoteStructure } from "./Structure/NoteStructure";

export interface INotes {
  current: {
    id: string | null;
    change: (id: string | null) => void;
  };
  get: NoteStructure[];
  add: (name: string, notebook: string | null) => void;
  update: (id: string, name: string, code: string) => void;
  remove: (id: string) => void;
}
