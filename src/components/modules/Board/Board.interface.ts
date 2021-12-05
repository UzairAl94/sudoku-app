import {
  DIFFICULTY,
  VALIDATION_STATUS,
} from "redux/components/Board/Board.enum";

export type onInputChange = (
  cellIndex: number,
  rowIndex: number,
  value: number
) => void;

export type onInputSelection = (cellIndex: number, rowIndex: number) => void;

export interface IBoardProps {
  board: number[][];
  difficulty: DIFFICULTY | null;
  status: VALIDATION_STATUS;
  isEmptyGrid: boolean;
}
