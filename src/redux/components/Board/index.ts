import { createActionAndReducers } from "redux/utils/reducer.helper";

import { IBoardActions } from "./Board.interface";

import { reducerName } from "./Board.constants";

import boardInitialState from "./initialState";

import * as boardEffects from "./affects";

export * from "./Board.interface";

export * from "./Board.constants";

export * from "./Board.enum";

const { actions, reducer } = createActionAndReducers<IBoardActions>(
  reducerName,
  boardInitialState,
  boardEffects
);

export { actions, boardInitialState, reducer };
