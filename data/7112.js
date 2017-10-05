{
  var self = this;

  var done = function(e) {
    if (callback) {
      callback(e);
    }

    self.markParsingComplete(elt);
    self.parseNext();
  };

  elt.addEventListener("load", done);
  elt.addEventListener("error", done);

  if (isIE && elt.localName === "style") {
    var fakeLoad = false;

    if (elt.textContent.indexOf("@import") == -1) {
      fakeLoad = true;
    } else if (elt.sheet) {
      fakeLoad = true;
      var csr = elt.sheet.cssRules;
      var len = csr ? csr.length : 0;

      for (var i = 0, r; i < len && (r = csr[i]); i++) {
        if (r.type === CSSRule.IMPORT_RULE) {
          fakeLoad = fakeLoad && Boolean(r.styleSheet);
        }
      }
    }

    if (fakeLoad) {
      elt.dispatchEvent(
        new CustomEvent("load", {
          bubbles: false
        })
      );
    }
  }
}
