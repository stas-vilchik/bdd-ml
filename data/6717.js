{
  var contextElement, refNode;

  switch (String(position).toLowerCase()) {
    case "beforebegin":
      contextElement = this.parentNode;
      refNode = this;
      break;

    case "afterend":
      contextElement = this.parentNode;
      refNode = this.nextSibling;
      break;

    case "afterbegin":
      contextElement = this;
      refNode = this.firstChild;
      break;

    case "beforeend":
      contextElement = this;
      refNode = null;
      break;

    default:
      return;
  }

  var df = frag(contextElement, text);
  contextElement.insertBefore(df, refNode);
}
