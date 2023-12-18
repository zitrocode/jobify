import { OnChange } from "@monaco-editor/react";

export interface IEditor {
  isActive: boolean;
  toggle: () => void;
  code: {
    value: string;
    change: OnChange;
    set: (code: string) => void;
  };
}
