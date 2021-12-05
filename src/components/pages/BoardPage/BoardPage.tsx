import React from "react";

import Header from "components/shared/Header/Header";
import Board from "components/modules/Board/Board";

import "./BoardPage.scss";

export default function BoardPage() {
  return (
    <>
      <Header />
      <div className="board-container">
        <Board />
      </div>
    </>
  );
}
