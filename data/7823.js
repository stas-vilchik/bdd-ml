{
  if (value) {
    value.formatElapsed = "";
    value.elapsedClassName = "";
    value.query = "";
    value.elapsed = null;
    value.waiting = null;
  } else {
    return {
      query: "***",
      formatElapsed: "",
      elapsedClassName: ""
    };
  }
}
