import { IReduxActionResponse } from "redux/interfaces";
import boardInitialState from "../initialState";
import {
  IBoardInitialState,
  IFetchGridSuccess,
  IFetchSolveGameSuccess,
  IValidateGame,
} from "../Board.interface";

export const emptyGrid = (state: IBoardInitialState) => {
  state = { ...boardInitialState };
  return state;
};

export const fetchGridSuccess = (
  state: IBoardInitialState,
  action: IReduxActionResponse<IFetchGridSuccess>
) => {
  const { payload } = action;
  if (payload) {
    state = {
      ...state,
      grid: payload.board || null,
      isEmpty: false,
      difficulty: payload.difficulty || null,
    };
  }
  return state;
};

export const validateGame = (
  state: IBoardInitialState,
  action: IReduxActionResponse<IValidateGame>
) => {
  const { payload } = action;
  if (payload) {
    state = { ...state, status: payload.status };
  }
  return state;
};

export const fetchSolveGameSuccess = (
  state: IBoardInitialState,
  action: IReduxActionResponse<IFetchSolveGameSuccess>
) => {
  const { payload } = action;
  if (payload) {
    state = {
      ...state,
      grid: payload.solution || null,
      status: payload.status,
      difficulty: payload.difficulty,
    };
  }
  return state;
};
