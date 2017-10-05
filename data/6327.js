{
  return {
    __DEV__: production ? "false" : "true",
    "process.env.NODE_ENV": production ? "'production'" : "'development'"
  };
}
