import { onInputChange, onInputSelection } from "../Board.interface";

export interface ICellProps {
  defaultValue?: number;
  onChange?: onInputChange;
  rowIndex: number;
  cellIndex: number;
  onSelection?: onInputSelection;
  active?: boolean;
}
