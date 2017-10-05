{
  if (format === undefined) {
    throw new Error(
      "`warning(condition, format, ...args)` requires a warning " +
        "message argument"
    );
  }

  if (!condition) {
    printWarning(format, ...args);
  }
}
