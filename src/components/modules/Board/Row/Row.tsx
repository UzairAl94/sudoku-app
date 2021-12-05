// lib
import * as React from "react";

// scss
import "./Row.scss";

// components
import Cell from "../Cell/Cell";
import { Grid } from "@mui/material";

// interface
import { IRowProps } from "./Row.interface";

function Row(props: IRowProps) {
  const { rowIndex, onChange, row, onSelection, selectedCell } = props;
  return (
    <Grid className="row" item xs={row.length}>
      <Grid container>
        {row.map((value: number, index: number) => {
          return (
            <Cell
              key={`cell-${index}`}
              defaultValue={value}
              cellIndex={index}
              rowIndex={rowIndex}
              onChange={onChange}
              active={selectedCell === index}
              onSelection={onSelection}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default React.memo(Row);
