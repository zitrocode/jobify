import { IEditor } from "./Editor";
import { INotes } from "./Notes";
import { ISearch } from "./Search";
import { INotebooks } from "./Notebooks";

export interface IAppContext {
  editor: IEditor;
  notes: INotes;
  notebooks: INotebooks;
  search: ISearch;
  tool: {
    current: string;
    change: (newTool: string) => void;
  };
}

export type IAppProvider = {
  children: React.ReactNode;
};
