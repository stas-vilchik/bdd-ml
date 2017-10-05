{
  var path = scope.path;
  var rootDocument = scope.rootDocument;
  var flags = scope.flags;
  var isIE = scope.isIE;
  var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
  var IMPORT_SELECTOR = "link[rel=" + IMPORT_LINK_TYPE + "]";
  var importParser = {
    documentSelectors: IMPORT_SELECTOR,
    importsSelectors: [
      IMPORT_SELECTOR,
      "link[rel=stylesheet]",
      "style",
      "script:not([type])",
      'script[type="text/javascript"]'
    ].join(","),
    map: {
      link: "parseLink",
      script: "parseScript",
      style: "parseStyle"
    },
    dynamicElements: [],
    parseNext: function() {
      var next = this.nextToParse();

      if (next) {
        this.parse(next);
      }
    },
    parse: function(elt) {
      if (this.isParsed(elt)) {
        flags.parse && console.log("[%s] is already parsed", elt.localName);
        return;
      }

      var fn = this[this.map[elt.localName]];

      if (fn) {
        this.markParsing(elt);
        fn.call(this, elt);
      }
    },
    parseDynamic: function(elt, quiet) {
      this.dynamicElements.push(elt);

      if (!quiet) {
        this.parseNext();
      }
    },
    markParsing: function(elt) {
      flags.parse && console.log("parsing", elt);
      this.parsingElement = elt;
    },
    markParsingComplete: function(elt) {
      elt.__importParsed = true;
      this.markDynamicParsingComplete(elt);

      if (elt.__importElement) {
        elt.__importElement.__importParsed = true;
        this.markDynamicParsingComplete(elt.__importElement);
      }

      this.parsingElement = null;
      flags.parse && console.log("completed", elt);
    },
    markDynamicParsingComplete: function(elt) {
      var i = this.dynamicElements.indexOf(elt);

      if (i >= 0) {
        this.dynamicElements.splice(i, 1);
      }
    },
    parseImport: function(elt) {
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
    },
    parseLink: function(linkElt) {
      if (nodeIsImport(linkElt)) {
        this.parseImport(linkElt);
      } else {
        linkElt.href = linkElt.href;
        this.parseGeneric(linkElt);
      }
    },
    parseStyle: function(elt) {
      var src = elt;
      elt = cloneStyle(elt);
      elt.__importElement = src;
      this.parseGeneric(elt);
    },
    parseGeneric: function(elt) {
      this.trackElement(elt);
      this.addElementToDocument(elt);
    },
    rootImportForElement: function(elt) {
      var n = elt;

      while (n.ownerDocument.__importLink) {
        n = n.ownerDocument.__importLink;
      }

      return n;
    },
    addElementToDocument: function(elt) {
      var port = this.rootImportForElement(elt.__importElement || elt);
      var l = (port.__insertedElements = port.__insertedElements || 0);
      var refNode = port.nextElementSibling;

      for (var i = 0; i < l; i++) {
        refNode = refNode && refNode.nextElementSibling;
      }

      port.parentNode.insertBefore(elt, refNode);
    },
    trackElement: function(elt, callback) {
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
    },
    parseScript: function(scriptElt) {
      var script = document.createElement("script");
      script.__importElement = scriptElt;
      script.src = scriptElt.src
        ? scriptElt.src
        : generateScriptDataUrl(scriptElt);
      scope.currentScript = scriptElt;
      this.trackElement(script, function(e) {
        script.parentNode.removeChild(script);
        scope.currentScript = null;
      });
      this.addElementToDocument(script);
    },
    nextToParse: function() {
      this._mayParse = [];
      return (
        !this.parsingElement &&
        (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic())
      );
    },
    nextToParseInDoc: function(doc, link) {
      if (doc && this._mayParse.indexOf(doc) < 0) {
        this._mayParse.push(doc);

        var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));

        for (
          var i = 0, l = nodes.length, p = 0, n;
          i < l && (n = nodes[i]);
          i++
        ) {
          if (!this.isParsed(n)) {
            if (this.hasResource(n)) {
              return nodeIsImport(n) ? this.nextToParseInDoc(n.import, n) : n;
            } else {
              return;
            }
          }
        }
      }

      return link;
    },
    nextToParseDynamic: function() {
      return this.dynamicElements[0];
    },
    parseSelectorsForNode: function(node) {
      var doc = node.ownerDocument || node;
      return doc === rootDocument
        ? this.documentSelectors
        : this.importsSelectors;
    },
    isParsed: function(node) {
      return node.__importParsed;
    },
    needsDynamicParsing: function(elt) {
      return this.dynamicElements.indexOf(elt) >= 0;
    },
    hasResource: function(node) {
      if (nodeIsImport(node) && node.import === undefined) {
        return false;
      }

      return true;
    }
  };

  function nodeIsImport(elt) {
    return elt.localName === "link" && elt.rel === IMPORT_LINK_TYPE;
  }

  function generateScriptDataUrl(script) {
    var scriptContent = generateScriptContent(script);
    return (
      "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent)
    );
  }

  function generateScriptContent(script) {
    return script.textContent + generateSourceMapHint(script);
  }

  function generateSourceMapHint(script) {
    var owner = script.ownerDocument;
    owner.__importedScripts = owner.__importedScripts || 0;
    var moniker = script.ownerDocument.baseURI;
    var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
    owner.__importedScripts++;
    return "\n//# sourceURL=" + moniker + num + ".js\n";
  }

  function cloneStyle(style) {
    var clone = style.ownerDocument.createElement("style");
    clone.textContent = style.textContent;
    path.resolveUrlsInStyle(clone);
    return clone;
  }

  scope.parser = importParser;
  scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
}
