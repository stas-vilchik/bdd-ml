{
  if (!selector) return;
  var attributes = this.attributes;
  if (/\.\w+/.test(selector)) attributes["class"] = true;
  if (/#\w+/.test(selector)) attributes["id"] = true;
  selector.replace(/\[\s*([^\s=\|~\]]+)/g, function(_, name) {
    attributes[name] = true;
  });
}
