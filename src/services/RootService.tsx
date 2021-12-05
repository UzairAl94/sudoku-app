import React from "react";
import LoaderRoot from "./loader/component/LoaderRoot";
import ToastRoot from "./toast/component/ToastRoot";

const RootService = () => (
  <>
    <ToastRoot />
    <LoaderRoot />
  </>
);

export default RootService;
