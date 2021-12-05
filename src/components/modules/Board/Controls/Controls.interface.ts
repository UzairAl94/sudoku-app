import { DIFFICULTY } from "redux/components/Board/Board.enum";

export interface IControlProps {
  difficultyStatus?: DIFFICULTY | null;
  isEmptyGrid?: boolean;
  status?: string;
  onKeyPadClick?: (value: number) => void;
  onSubmit?: (validate?: boolean) => void;
  onClear?: () => void;
  onFetch?: (difficulty: DIFFICULTY) => void;
}
