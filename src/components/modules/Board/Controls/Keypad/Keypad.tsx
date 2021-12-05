// lib
import React from "react";

// components
import { Button, Grid } from "@mui/material";

// scss
import "./Keypad.scss";

interface IKeypadProps {
  onClick?: (value: number) => void;
}

function Keypad(props: IKeypadProps) {
  const { onClick } = props;

  const onButtonClick = (value: number) => () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <Grid container className="keypad">
      {[...Array(9)].map((_, index: number) => {
        return (
          <Grid className="keypad-cell" item xs={4}>
            <Button size="large" onClick={onButtonClick(index + 1)}>
              {index + 1}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default React.memo(Keypad);
