{
  if (staticStyle && !styleBinding && !vShowExpression) {
    return [
      {
        type: RAW,
        value: " style=" + JSON.stringify(staticStyle)
      }
    ];
  } else {
    return [
      {
        type: EXPRESSION,
        value:
          "_ssrStyle(" +
          (parsedStaticStyle || "null") +
          "," +
          (styleBinding || "null") +
          ", " +
          (vShowExpression
            ? "{ display: (" + vShowExpression + ") ? '' : 'none' }"
            : "null") +
          ")"
      }
    ];
  }
}
