export type NoteStructure = {
  id: string;
  name: string;
  code: string;

  notebook_id: string | null;

  date: Date;
  update_date: Date;
  isFavorite: boolean;
  isDelete: boolean;
};
