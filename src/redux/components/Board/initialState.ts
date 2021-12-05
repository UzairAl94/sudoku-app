import { VALIDATION_STATUS } from "./Board.enum";
import { IBoardInitialState } from "./Board.interface";

const emptyGrid = [...Array(9)].map(() => {
  return [...Array(9)].map(() => {
    return 0;
  });
});

const boardInitialState: IBoardInitialState = {
  isEmpty: true,
  grid: emptyGrid,
  difficulty: null,
  status: VALIDATION_STATUS.UNSOLVED,
};

export default boardInitialState;
