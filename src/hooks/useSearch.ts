import { useState } from "react";

export const useSearchNote = () => {
  const [search, setSearch] = useState<string | null>(null);

  const handleSearchNote = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };

  return { search, handleSearchNote };
};
