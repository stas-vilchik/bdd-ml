{
  if (HTMLImports.__importsParsingHook) {
    HTMLImports.__importsParsingHook(elt);
  }

  if (elt.import) {
    elt.import.__importParsed = true;
  }

  this.markParsingComplete(elt);

  if (elt.__resource && !elt.__error) {
    elt.dispatchEvent(
      new CustomEvent("load", {
        bubbles: false
      })
    );
  } else {
    elt.dispatchEvent(
      new CustomEvent("error", {
        bubbles: false
      })
    );
  }

  if (elt.__pending) {
    var fn;

    while (elt.__pending.length) {
      fn = elt.__pending.shift();

      if (fn) {
        fn({
          target: elt
        });
      }
    }
  }

  this.parseNext();
}
