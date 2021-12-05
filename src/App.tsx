// Lib
/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";

// Components
import RootService from "services/RootService";
import BoardPage from "components/pages/BoardPage/BoardPage";

// Redux Store
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BoardPage />
      <RootService />
    </Provider>
  );
}

export default App;
