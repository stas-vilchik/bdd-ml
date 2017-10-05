{
  var nativeConstructorName = elements[tagName];
  var nativeConstructor = window[nativeConstructorName];
  if (!nativeConstructor) return;
  var element = document.createElement(tagName);
  var wrapperConstructor = element.constructor;
  window[nativeConstructorName] = wrapperConstructor;
}
