// lib
import React, { useEffect, useState } from "react";

// component
import { Grid } from "@mui/material";

// scss
import "./Cell.scss";

// interface
import { ICellProps } from "./Cell.interface";

function Cell(props: ICellProps) {
  const { onChange, cellIndex, rowIndex, defaultValue, onSelection, active } =
    props;

  const [value, setValue] = useState<number | string>("");

  useEffect(() => {
    if (value !== defaultValue) {
      setValue(defaultValue || "");
    }
  }, [defaultValue]);

  const onInputChange = (e: any) => {
    const inputValue = e.target.value;
    const isValid =
      inputValue !== undefined && !isNaN(inputValue) && inputValue < 10;
    const newValue = isValid ? inputValue : value;
    setValue(newValue || "");
    if (onChange && newValue) {
      onChange(cellIndex, rowIndex, newValue);
    }
  };

  const onInputClick = () => {
    if (onSelection) onSelection(cellIndex, rowIndex);
  };

  return (
    <Grid item className={`cell ${active ? "active" : ""}`} xs={1}>
      <input
        type="text"
        defaultValue={value}
        value={value}
        onChange={onInputChange}
        onClick={onInputClick}
      />
    </Grid>
  );
}

export default Cell;
