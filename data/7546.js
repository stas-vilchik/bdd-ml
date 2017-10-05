{
  switch (tag) {
    case "address":
    case "article":
    case "aside":
    case "blockquote":
    case "center":
    case "details":
    case "dialog":
    case "dir":
    case "div":
    case "dl":
    case "fieldset":
    case "figcaption":
    case "figure":
    case "footer":
    case "header":
    case "hgroup":
    case "main":
    case "menu":
    case "nav":
    case "ol":
    case "p":
    case "section":
    case "summary":
    case "ul":
    case "pre":
    case "listing":
    case "table":
    case "hr":
    case "xmp":
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return ancestorInfo.pTagInButtonScope;

    case "form":
      return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

    case "li":
      return ancestorInfo.listItemTagAutoclosing;

    case "dd":
    case "dt":
      return ancestorInfo.dlItemTagAutoclosing;

    case "button":
      return ancestorInfo.buttonTagInScope;

    case "a":
      return ancestorInfo.aTagInScope;

    case "nobr":
      return ancestorInfo.nobrTagInScope;
  }

  return null;
}
