export type NoteStructure = {
  id: number;
  name: string;
  code: string;

  notebook_id: string | null;

  date: Date;
  update_date: Date;
  isFavorite: boolean;
  isDelete: boolean;
};
