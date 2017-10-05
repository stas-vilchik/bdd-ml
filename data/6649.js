{
  var ln = el.localName;
  return (
    ln === localName ||
    (ln === localNameLowerCase && el.namespaceURI === XHTML_NS)
  );
}
