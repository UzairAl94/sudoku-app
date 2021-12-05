// lib
import * as React from "react";
import { useDispatch } from "react-redux";

// components
import { Grid, Paper } from "@mui/material";
import Controls from "./Controls/Controls";
import Row from "./Row/Row";

// scss
import "./Board.scss";

// interface
import { IBoardProps } from "./Board.interface";

// connector
import BoardConnector from "./Board.connector";

// redux
import {
  solveGrid,
  validateGrid,
  fetchGrid,
} from "redux/components/Board/sources";
import { actions, DIFFICULTY } from "redux/components/Board";

let selectedCell: number | null = null;
let selectedRow: number | null = null;

function Board(props: IBoardProps) {
  const { board, difficulty, status, isEmptyGrid } = props;

  const { emptyGrid } = actions;

  const dispatch = useDispatch();

  // using ref to avoid pitching change to redux on every change
  const boardState = React.useRef<number[][] | undefined>(board);

  // eslint-disable-next-line
  const [_, setRenderValue] = React.useState<number>(0);

  React.useEffect(() => {
    if (board && board.length) {
      boardState.current = [...board];
      toggleRender();
    }
  }, [board]);

  const toggleRender = React.useCallback(() => setRenderValue(Date.now()), []);

  const onChange = React.useCallback(
    (cellIndex: number, rowIndex: number, value: number) => {
      if (boardState.current) {
        const newRow = [...boardState.current[rowIndex]];
        newRow[cellIndex] = value;
        boardState.current[rowIndex] = newRow;
        toggleRender();
      }
    },
    []
  );

  const onCellSelection = React.useCallback(
    (cellIndex: number, rowIndex: number) => {
      selectedCell = cellIndex;
      selectedRow = rowIndex;
      toggleRender();
    },
    []
  );

  const onKeyPadClick = React.useCallback((value: number) => {
    if (selectedCell !== null && selectedRow !== null) {
      onChange(selectedCell, selectedRow, value);
    }
  }, []);

  const generateGrid = () => {
    if (boardState.current && boardState.current.length) {
      return boardState.current.map((row, index: number) => {
        const additionalProps: any = {};
        if (index === selectedRow) {
          additionalProps.selectedCell = selectedCell;
        }
        return (
          <Row
            key={`r-${index}`}
            row={row}
            rowIndex={index}
            onChange={onChange}
            onSelection={onCellSelection}
            {...additionalProps}
          />
        );
      });
    }
    return null;
  };

  const onSubmitGrid = React.useCallback((validate?: boolean) => {
    const submitFunc = validate ? validateGrid : solveGrid;
    if (boardState.current) {
      dispatch(submitFunc(boardState.current));
    }
  }, []);

  const onClearGrid = React.useCallback((validate?: boolean) => {
    dispatch(emptyGrid());
    selectedCell = null;
    selectedRow = null;
  }, []);

  const onFetchGrid = React.useCallback((difficulty: DIFFICULTY) => {
    dispatch(fetchGrid(difficulty));
  }, []);

  return (
    <Paper className="board-paper" elevation={3}>
      <Grid columns={12} container spacing={2}>
        <Grid item xs={8}>
          <Grid columns={9} className="board" container>
            {generateGrid()}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Controls
            isEmptyGrid={isEmptyGrid}
            difficultyStatus={difficulty}
            status={status}
            onKeyPadClick={onKeyPadClick}
            onSubmit={onSubmitGrid}
            onClear={onClearGrid}
            onFetch={onFetchGrid}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BoardConnector(Board);
