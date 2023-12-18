import { IEditor } from "./Editor";
import { INotes } from "./Notes";
import { ISearch } from "./Search";
import { INotebooks } from "./Notebooks";

export interface IAppContext {
  editor: IEditor;
  notes: INotes;
  notebooks: INotebooks;
  search: ISearch;
}

export type IAppProvider = {
  children: React.ReactNode;
};
