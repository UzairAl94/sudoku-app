// lib
import React from "react";

// components
import { Button, Divider, Stack, Typography } from "@mui/material";
import Keypad from "./Keypad/Keypad";

// icons
import CalculateIcon from "@mui/icons-material/Calculate";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RefreshIcon from "@mui/icons-material/Refresh";

// redux
import {
  DIFFICULTY,
  VALIDATION_STATUS,
} from "redux/components/Board/Board.enum";

// scss
import "./Controls.scss";

// interface
import { IControlProps } from "./Controls.interface";

function Controls(props: IControlProps) {
  const {
    onKeyPadClick,
    difficultyStatus,
    status,
    onSubmit,
    onClear,
    isEmptyGrid,
    onFetch,
  } = props;

  const isSolved = status === VALIDATION_STATUS.SOLVED;

  const onChangeDifficulty = (e: any) => {
    const difficulty = (e.target as HTMLInputElement).name;
    if (onFetch) onFetch(difficulty as DIFFICULTY);
  };

  const generateDifficultyControls = () => {
    return Object.values(DIFFICULTY).map((value: string) => {
      const variant = difficultyStatus === value ? "contained" : "outlined";
      return (
        <Button
          disabled={!isEmptyGrid}
          className="difficulty-status"
          variant={variant}
          name={value}
          onClick={onChangeDifficulty}
        >
          {value}
        </Button>
      );
    });
  };

  const handleClick =
    (validate: boolean = false) =>
    () => {
      if (onSubmit) onSubmit(validate);
    };

  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      className="control-container"
    >
      {/* Game clear */}
      <Button
        size="large"
        disabled={isEmptyGrid}
        variant="contained"
        onClick={onClear}
        endIcon={<RefreshIcon />}
      >
        Clear
      </Button>

      {/* Status */}
      <Typography variant="h5" className="status-text" component="div">
        <span>Status</span>: {status}
      </Typography>

      {/* Difficulty Controls */}
      <Stack direction="row" spacing={2}>
        {generateDifficultyControls()}
      </Stack>

      {/* Keypad */}
      <Keypad onClick={onKeyPadClick} />

      {/* Actions */}
      <Stack direction="row" spacing={2} className="action-row">
        <Button
          size="large"
          disabled={isSolved || isEmptyGrid}
          variant="contained"
          onClick={handleClick(true)}
          endIcon={<TaskAltIcon />}
        >
          Validate
        </Button>
        <Button
          size="large"
          disabled={isSolved || isEmptyGrid}
          variant="contained"
          onClick={handleClick()}
          endIcon={<CalculateIcon />}
        >
          Solve
        </Button>
      </Stack>
    </Stack>
  );
}

export default React.memo(Controls);
