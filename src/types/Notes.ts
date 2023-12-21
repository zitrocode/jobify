import { NoteStructure } from "./Structure/NoteStructure";

type IUpdate = (
  id: string,
  options: {
    name?: string;
    code?: string;
    isDelete?: boolean;
    isFavorite?: boolean;
  }
) => void;

export interface INotes {
  current: {
    id: string | null;
    change: (id: string | null) => void;
  };
  get: NoteStructure[];
  add: (name: string, notebook: string | null) => void;
  update: IUpdate;
  remove: (id: string) => void;
}
