// Lib
import { Dispatch } from "react";

// Client Helper
import { HttpClient } from "redux/client";
import { throwErrorToast } from "redux/utils/source.helper";

// Interfaces
import {
  IFetchGridSuccess,
  IFetchSolveGameSuccess,
  IValidateGame,
} from "../Board.interface";

// Constants
import {
  FETCH_BOARD_URL,
  VALIDATE_BOARD_URL,
  SOLVE_BOARD_URL,
} from "../Board.constants";

// Actions
import { actions } from "../index";
import { DIFFICULTY } from "../Board.enum";

export const fetchGrid =
  (difficulty: DIFFICULTY = DIFFICULTY.EASY) =>
  async (dispatch: Dispatch<any>) => {
    const client = new HttpClient();
    const url = FETCH_BOARD_URL;
    const queryParams: any = {
      difficulty: difficulty,
    };

    try {
      const response: IFetchGridSuccess = await client.get<IFetchGridSuccess>(
        url,
        {
          params: { ...queryParams },
        }
      );
      dispatch(
        actions.fetchGridSuccess({
          board: response.board,
          difficulty,
        })
      );
    } catch (e) {
      throwErrorToast(e);
    }
  };

export const validateGrid =
  (board: number[][]) => async (dispatch: Dispatch<any>) => {
    const client = new HttpClient();
    const url = VALIDATE_BOARD_URL;
    const formData = new FormData();
    formData.append("board", JSON.stringify(board));
    try {
      const response: IValidateGame = await client.post<IValidateGame>(
        url,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      dispatch(actions.validateGame(response));
    } catch (e) {
      throwErrorToast(e);
    }
  };

export const solveGrid =
  (board: number[][]) => async (dispatch: Dispatch<any>) => {
    const client = new HttpClient();
    const url = SOLVE_BOARD_URL;

    const formData = new FormData();
    formData.append("board", JSON.stringify(board));

    try {
      const response: IFetchSolveGameSuccess =
        await client.post<IFetchSolveGameSuccess>(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      dispatch(actions.fetchSolveGameSuccess(response));
    } catch (e) {
      throwErrorToast(e);
    }
  };
