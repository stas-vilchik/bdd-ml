{
  var iterations = 0;
  var observer = new lib$es6$promise$asap$$BrowserMutationObserver(
    lib$es6$promise$asap$$flush
  );
  var node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function() {
    node.data = iterations = ++iterations % 2;
  };
}
