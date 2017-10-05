{
  var style = cssTextToStyle(cssText);
  style.setAttribute(name, "");
  style.setAttribute(SHIMMED_ATTRIBUTE, "");
  document.head.appendChild(style);
}
