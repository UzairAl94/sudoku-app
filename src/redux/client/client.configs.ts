export const normalizeCatchErrors = (error: any) => {
  let errorPayload;
  if (error && error.data) {
    errorPayload = error.data.error
      ? error.data.error
      : error.data.errors || ["Something went wrong"];
  } else {
    errorPayload = ["Something went wrong"];
  }
  return {
    status: error ? error.status || 0 : 0,
    statusText: error ? error.statusText || "" : "",
    errors:
      errorPayload instanceof Array
        ? errorPayload
        : [JSON.stringify(errorPayload, null, 4)],
  };
};
