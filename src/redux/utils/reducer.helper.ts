import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable import/prefer-default-export */
export function convertArrayToObject(array: Array<any>, key: string) {
	return array.reduce((prevValue: any, item: any) => {
		if (item) {
			/* eslint-disable-next-line */
			prevValue[item[key]] = item;
		}
		return prevValue;
	}, {});
}

export const createActionAndReducers = <T extends {}>(
	reducerName: string,
	initialState: any,
	affects: any
): { actions: T; reducer: any } => {
	const slice = createSlice({
		name: reducerName,
		initialState,
		reducers: {
			...affects,
		},
	});
	const { actions, reducer } = slice;
	return {
		actions: actions as T,
		reducer,
	};
};
