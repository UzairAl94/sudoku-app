import { onInputChange, onInputSelection } from "../Board.interface";

export interface IRowProps {
  rowIndex: number;
  row: number[];
  onChange?: onInputChange;
  onSelection?: onInputSelection;
  selectedCell?: number;
}
