// Lib
import * as React from "react";
import { connect } from "react-redux";
import { IRootState } from "redux/rootReducer";

// State to bind
const mapStateToProps = (state: IRootState) => ({
  isEmptyGrid: state.board.isEmpty,
  board: state.board.grid,
  difficulty: state.board.difficulty,
  status: state.board.status,
});

const BoardConnector = (component: React.ComponentType<any>) =>
  connect(mapStateToProps)(component);

export default BoardConnector;
