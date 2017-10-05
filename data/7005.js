{
  doc.head.appendChild(style.impl);
  rules = Array.prototype.slice.call(style.sheet.cssRules, 0);
  callback(rules);
}
