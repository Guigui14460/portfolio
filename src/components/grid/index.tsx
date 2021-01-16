import * as React from "react";
import "./grid.css";

type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  alignItems?: GridItemsAlignment;
  column?: boolean;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  row?: boolean;
  sm?: GridSizes;
  style?: React.CSSProperties;
}

const Grid: React.FunctionComponent<GridProps> = props => {
  const {
    alignItems,
    children,
    column,
    expanded,
    justify,
    lg,
    md,
    row,
    sm,
    style,
  } = props;

  const isRow: boolean = row || !column;

  const classes: string =
    (!isRow ? "column" : "row") +
    // Row styling
    (isRow && expanded ? ` ${"expanded"}` : "") +
    (isRow && justify ? ` ${justify}` : "") +
    (isRow && alignItems ? ` ${"align-" + alignItems}` : "") +
    // Column styling
    (!isRow && sm ? ` ${"sm-" + sm}` : "") +
    (!isRow && md ? ` ${"md-" + md}` : "") +
    (!isRow && lg ? ` ${"lg-" + lg}` : "");

  return <div style={style} className={classes}>{children}</div>;
};

export default Grid;