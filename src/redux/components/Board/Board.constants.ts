import { GATEWAY_URL } from "redux/constants";

// reducer name !important
export const reducerName = "board";

// urls

// query params => ?difficulty=easy,medium,hard
export const FETCH_BOARD_URL = `${GATEWAY_URL}/board`;

export const VALIDATE_BOARD_URL = `${GATEWAY_URL}/validate`;

export const SOLVE_BOARD_URL = `${GATEWAY_URL}/solve`;
