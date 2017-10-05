{
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"
  ) {
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    throw new Error("^_^");
  }

  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
