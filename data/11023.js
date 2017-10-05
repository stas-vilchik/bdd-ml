{
  return (
    "_v(" +
    (text.type === 2
      ? text.expression
      : transformSpecialNewlines(JSON.stringify(text.text))) +
    ")"
  );
}
