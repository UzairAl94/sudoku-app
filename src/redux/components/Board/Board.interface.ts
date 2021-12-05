import { IReduxAction } from "redux/interfaces";
import { DIFFICULTY, VALIDATION_STATUS } from "./Board.enum";

export interface IBoardActions {
  fetchGridSuccess: IReduxAction<IFetchGridSuccess>;
  validateGame: IReduxAction<IValidateGame>;
  fetchSolveGameSuccess: IReduxAction<IFetchSolveGameSuccess>;
  emptyGrid: IReduxAction<void>;
}

export interface IFetchGridSuccess {
  board: number[][];
  difficulty?: DIFFICULTY;
}

export interface IValidateGame {
  status: VALIDATION_STATUS;
}

export interface IFetchSolveGameSuccess {
  difficulty: DIFFICULTY;
  solution: number[][];
  status: VALIDATION_STATUS;
}

export interface IBoardInitialState {
  isEmpty: boolean;
  grid: number[][] | null;
  difficulty: DIFFICULTY | null;
  status: VALIDATION_STATUS;
}
