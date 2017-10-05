{
  ("use strict");

  var OriginalMutationObserver = window.MutationObserver;
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function handle() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];

    for (var i = 0; i < copies.length; i++) {
      (0, copies[i])();
    }
  }

  if (OriginalMutationObserver) {
    var counter = 1;
    var observer = new OriginalMutationObserver(handle);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function() {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    timerFunc = window.setTimeout;
  }

  function setEndOfMicrotask(func) {
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(handle, 0);
  }

  context.setEndOfMicrotask = setEndOfMicrotask;
}
