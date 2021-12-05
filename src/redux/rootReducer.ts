import { combineReducers } from "redux";
import * as Board from "./components/Board";

// add modules here after import to register reducers
const modules = [Board];

const rootReducer = combineReducers(
  modules.reduce((reducersObject: any, module) => {
    reducersObject[module.reducerName] = module.reducer;
    return reducersObject;
  }, {})
);

// To expose rootReducer state type
export interface IRootState {
  [Board.reducerName]: Board.IBoardInitialState;
}

export default rootReducer;
