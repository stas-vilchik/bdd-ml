{
  var editable = document.createElement("div");
  var inner = document.createElement("span");
  inner.appendChild(document.createTextNode(TEXT));
  editable.appendChild(inner);
  return editable;
}
