export interface ISearch {
  value: string;
  change: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
