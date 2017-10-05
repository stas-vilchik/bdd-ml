{
  var p = unwrap(contextElement.cloneNode(false));
  p.innerHTML = html;
  var df = unwrap(document.createDocumentFragment());
  var c;

  while ((c = p.firstChild)) {
    df.appendChild(c);
  }

  return wrap(df);
}
