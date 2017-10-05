{
  frame.initialized = true;
  document.body.appendChild(frame);
  var doc = frame.contentDocument;
  var base = doc.createElement("base");
  base.href = document.baseURI;
  doc.head.appendChild(base);
}
