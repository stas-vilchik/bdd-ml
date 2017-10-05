{
  var placeholder = new renderer.Comment("root");

  placeholder.hasAttribute = placeholder.removeAttribute = function() {};

  document.documentElement.appendChild(placeholder);
  return placeholder;
}
