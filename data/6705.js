{
  switch (c) {
    case "&":
      return "&amp;";

    case "<":
      return "&lt;";

    case ">":
      return "&gt;";

    case '"':
      return "&quot;";

    case " ":
      return "&nbsp;";
  }
}
