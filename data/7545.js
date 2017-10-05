{
  switch (parentTag) {
    case "select":
      return tag === "option" || tag === "optgroup" || tag === "#text";

    case "optgroup":
      return tag === "option" || tag === "#text";

    case "option":
      return tag === "#text";

    case "tr":
      return (
        tag === "th" ||
        tag === "td" ||
        tag === "style" ||
        tag === "script" ||
        tag === "template"
      );

    case "tbody":
    case "thead":
    case "tfoot":
      return (
        tag === "tr" ||
        tag === "style" ||
        tag === "script" ||
        tag === "template"
      );

    case "colgroup":
      return tag === "col" || tag === "template";

    case "table":
      return (
        tag === "caption" ||
        tag === "colgroup" ||
        tag === "tbody" ||
        tag === "tfoot" ||
        tag === "thead" ||
        tag === "style" ||
        tag === "script" ||
        tag === "template"
      );

    case "head":
      return (
        tag === "base" ||
        tag === "basefont" ||
        tag === "bgsound" ||
        tag === "link" ||
        tag === "meta" ||
        tag === "title" ||
        tag === "noscript" ||
        tag === "noframes" ||
        tag === "style" ||
        tag === "script" ||
        tag === "template"
      );

    case "html":
      return tag === "head" || tag === "body";

    case "#document":
      return tag === "html";
  }

  switch (tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return (
        parentTag !== "h1" &&
        parentTag !== "h2" &&
        parentTag !== "h3" &&
        parentTag !== "h4" &&
        parentTag !== "h5" &&
        parentTag !== "h6"
      );

    case "rp":
    case "rt":
      return impliedEndTags.indexOf(parentTag) === -1;

    case "body":
    case "caption":
    case "col":
    case "colgroup":
    case "frame":
    case "head":
    case "html":
    case "tbody":
    case "td":
    case "tfoot":
    case "th":
    case "thead":
    case "tr":
      return parentTag == null;
  }

  return true;
}
