{
  var ShadowCSS = {
    strictStyling: false,
    registry: {},
    shimStyling: function(root, name, extendsName) {
      var scopeStyles = this.prepareRoot(root, name, extendsName);
      var typeExtension = this.isTypeExtension(extendsName);
      var scopeSelector = this.makeScopeSelector(name, typeExtension);
      var cssText = stylesToCssText(scopeStyles, true);
      cssText = this.scopeCssText(cssText, scopeSelector);

      if (root) {
        root.shimmedStyle = cssText;
      }

      this.addCssToDocument(cssText, name);
    },
    shimStyle: function(style, selector) {
      return this.shimCssText(style.textContent, selector);
    },
    shimCssText: function(cssText, selector) {
      cssText = this.insertDirectives(cssText);
      return this.scopeCssText(cssText, selector);
    },
    makeScopeSelector: function(name, typeExtension) {
      if (name) {
        return typeExtension ? "[is=" + name + "]" : name;
      }

      return "";
    },
    isTypeExtension: function(extendsName) {
      return extendsName && extendsName.indexOf("-") < 0;
    },
    prepareRoot: function(root, name, extendsName) {
      var def = this.registerRoot(root, name, extendsName);
      this.replaceTextInStyles(def.rootStyles, this.insertDirectives);
      this.removeStyles(root, def.rootStyles);

      if (this.strictStyling) {
        this.applyScopeToContent(root, name);
      }

      return def.scopeStyles;
    },
    removeStyles: function(root, styles) {
      for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
        s.parentNode.removeChild(s);
      }
    },
    registerRoot: function(root, name, extendsName) {
      var def = (this.registry[name] = {
        root: root,
        name: name,
        extendsName: extendsName
      });
      var styles = this.findStyles(root);
      def.rootStyles = styles;
      def.scopeStyles = def.rootStyles;
      var extendee = this.registry[def.extendsName];

      if (extendee) {
        def.scopeStyles = extendee.scopeStyles.concat(def.scopeStyles);
      }

      return def;
    },
    findStyles: function(root) {
      if (!root) {
        return [];
      }

      var styles = root.querySelectorAll("style");
      return Array.prototype.filter.call(styles, function(s) {
        return !s.hasAttribute(NO_SHIM_ATTRIBUTE);
      });
    },
    applyScopeToContent: function(root, name) {
      if (root) {
        Array.prototype.forEach.call(root.querySelectorAll("*"), function(
          node
        ) {
          node.setAttribute(name, "");
        });
        Array.prototype.forEach.call(
          root.querySelectorAll("template"),
          function(template) {
            this.applyScopeToContent(template.content, name);
          },
          this
        );
      }
    },
    insertDirectives: function(cssText) {
      cssText = this.insertPolyfillDirectivesInCssText(cssText);
      return this.insertPolyfillRulesInCssText(cssText);
    },
    insertPolyfillDirectivesInCssText: function(cssText) {
      cssText = cssText.replace(cssCommentNextSelectorRe, function(match, p1) {
        return p1.slice(0, -2) + "{";
      });
      return cssText.replace(cssContentNextSelectorRe, function(match, p1) {
        return p1 + " {";
      });
    },
    insertPolyfillRulesInCssText: function(cssText) {
      cssText = cssText.replace(cssCommentRuleRe, function(match, p1) {
        return p1.slice(0, -1);
      });
      return cssText.replace(cssContentRuleRe, function(match, p1, p2, p3) {
        var rule = match.replace(p1, "").replace(p2, "");
        return p3 + rule;
      });
    },
    scopeCssText: function(cssText, scopeSelector) {
      var unscoped = this.extractUnscopedRulesFromCssText(cssText);
      cssText = this.insertPolyfillHostInCssText(cssText);
      cssText = this.convertColonHost(cssText);
      cssText = this.convertColonHostContext(cssText);
      cssText = this.convertShadowDOMSelectors(cssText);

      if (scopeSelector) {
        var self = this,
          cssText;
        withCssRules(cssText, function(rules) {
          cssText = self.scopeRules(rules, scopeSelector);
        });
      }

      cssText = cssText + "\n" + unscoped;
      return cssText.trim();
    },
    extractUnscopedRulesFromCssText: function(cssText) {
      var r = "",
        m;

      while ((m = cssCommentUnscopedRuleRe.exec(cssText))) {
        r += m[1].slice(0, -1) + "\n\n";
      }

      while ((m = cssContentUnscopedRuleRe.exec(cssText))) {
        r += m[0].replace(m[2], "").replace(m[1], m[3]) + "\n\n";
      }

      return r;
    },
    convertColonHost: function(cssText) {
      return this.convertColonRule(
        cssText,
        cssColonHostRe,
        this.colonHostPartReplacer
      );
    },
    convertColonHostContext: function(cssText) {
      return this.convertColonRule(
        cssText,
        cssColonHostContextRe,
        this.colonHostContextPartReplacer
      );
    },
    convertColonRule: function(cssText, regExp, partReplacer) {
      return cssText.replace(regExp, function(m, p1, p2, p3) {
        p1 = polyfillHostNoCombinator;

        if (p2) {
          var parts = p2.split(","),
            r = [];

          for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
            p = p.trim();
            r.push(partReplacer(p1, p, p3));
          }

          return r.join(",");
        } else {
          return p1 + p3;
        }
      });
    },
    colonHostContextPartReplacer: function(host, part, suffix) {
      if (part.match(polyfillHost)) {
        return this.colonHostPartReplacer(host, part, suffix);
      } else {
        return host + part + suffix + ", " + part + " " + host + suffix;
      }
    },
    colonHostPartReplacer: function(host, part, suffix) {
      return host + part.replace(polyfillHost, "") + suffix;
    },
    convertShadowDOMSelectors: function(cssText) {
      for (var i = 0; i < shadowDOMSelectorsRe.length; i++) {
        cssText = cssText.replace(shadowDOMSelectorsRe[i], " ");
      }

      return cssText;
    },
    scopeRules: function(cssRules, scopeSelector) {
      var cssText = "";

      if (cssRules) {
        Array.prototype.forEach.call(
          cssRules,
          function(rule) {
            if (
              rule.selectorText &&
              rule.style &&
              rule.style.cssText !== undefined
            ) {
              cssText +=
                this.scopeSelector(
                  rule.selectorText,
                  scopeSelector,
                  this.strictStyling
                ) + " {\n	";
              cssText += this.propertiesFromRule(rule) + "\n}\n\n";
            } else if (rule.type === CSSRule.MEDIA_RULE) {
              cssText += "@media " + rule.media.mediaText + " {\n";
              cssText += this.scopeRules(rule.cssRules, scopeSelector);
              cssText += "\n}\n\n";
            } else {
              try {
                if (rule.cssText) {
                  cssText += rule.cssText + "\n\n";
                }
              } catch (x) {
                if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                  cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
                }
              }
            }
          },
          this
        );
      }

      return cssText;
    },
    ieSafeCssTextFromKeyFrameRule: function(rule) {
      var cssText = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule) {
        cssText += " " + rule.keyText + " {" + rule.style.cssText + "}";
      });
      cssText += " }";
      return cssText;
    },
    scopeSelector: function(selector, scopeSelector, strict) {
      var r = [],
        parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();

        if (this.selectorNeedsScoping(p, scopeSelector)) {
          p =
            strict && !p.match(polyfillHostNoCombinator)
              ? this.applyStrictSelectorScope(p, scopeSelector)
              : this.applySelectorScope(p, scopeSelector);
        }

        r.push(p);
      }, this);
      return r.join(", ");
    },
    selectorNeedsScoping: function(selector, scopeSelector) {
      if (Array.isArray(scopeSelector)) {
        return true;
      }

      var re = this.makeScopeMatcher(scopeSelector);
      return !selector.match(re);
    },
    makeScopeMatcher: function(scopeSelector) {
      scopeSelector = scopeSelector.replace(/\[/g, "\\[").replace(/\[/g, "\\]");
      return new RegExp("^(" + scopeSelector + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function(selector, selectorScope) {
      return Array.isArray(selectorScope)
        ? this.applySelectorScopeList(selector, selectorScope)
        : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function(selector, scopeSelectorList) {
      var r = [];

      for (var i = 0, s; (s = scopeSelectorList[i]); i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }

      return r.join(", ");
    },
    applySimpleSelectorScope: function(selector, scopeSelector) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector);
        return selector.replace(polyfillHostRe, scopeSelector + " ");
      } else {
        return scopeSelector + " " + selector;
      }
    },
    applyStrictSelectorScope: function(selector, scopeSelector) {
      scopeSelector = scopeSelector.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"],
        scoped = selector,
        attrName = "[" + scopeSelector + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts
          .map(function(p) {
            var t = p.trim().replace(polyfillHostRe, "");

            if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
              p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
            }

            return p;
          })
          .join(sep);
      });
      return scoped;
    },
    insertPolyfillHostInCssText: function(selector) {
      return selector
        .replace(colonHostContextRe, polyfillHostContext)
        .replace(colonHostRe, polyfillHost);
    },
    propertiesFromRule: function(rule) {
      var cssText = rule.style.cssText;

      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText = cssText.replace(
          /content:[^;]*;/g,
          "content: '" + rule.style.content + "';"
        );
      }

      var style = rule.style;

      for (var i in style) {
        if (style[i] === "initial") {
          cssText += i + ": initial; ";
        }
      }

      return cssText;
    },
    replaceTextInStyles: function(styles, action) {
      if (styles && action) {
        if (!(styles instanceof Array)) {
          styles = [styles];
        }

        Array.prototype.forEach.call(
          styles,
          function(s) {
            s.textContent = action.call(this, s.textContent);
          },
          this
        );
      }
    },
    addCssToDocument: function(cssText, name) {
      if (cssText.match("@import")) {
        addOwnSheet(cssText, name);
      } else {
        addCssToDocument(cssText);
      }
    }
  };
  var selectorRe = /([^{]*)({[\s\S]*?})/gim,
    cssCommentRe = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    cssCommentNextSelectorRe = /\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,
    cssContentNextSelectorRe = /polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,
    cssCommentRuleRe = /\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,
    cssContentRuleRe = /(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,
    cssCommentUnscopedRuleRe = /\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,
    cssContentUnscopedRuleRe = /(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,
    cssPseudoRe = /::(x-[^\s{,(]*)/gim,
    cssPartRe = /::part\(([^)]*)\)/gim,
    polyfillHost = "-shadowcsshost",
    polyfillHostContext = "-shadowcsscontext",
    parenSuffix = ")(?:\\((" + "(?:\\([^)(]*\\)|[^)(]*)+?" + ")\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim"),
    cssColonHostContextRe = new RegExp(
      "(" + polyfillHostContext + parenSuffix,
      "gim"
    ),
    selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$",
    colonHostRe = /\:host/gim,
    colonHostContextRe = /\:host-context/gim,
    polyfillHostNoCombinator = polyfillHost + "-no-combinator",
    polyfillHostRe = new RegExp(polyfillHost, "gim"),
    polyfillHostContextRe = new RegExp(polyfillHostContext, "gim"),
    shadowDOMSelectorsRe = [
      /\^\^/g,
      /\^/g,
      /\/shadow\//g,
      /\/shadow-deep\//g,
      /::shadow/g,
      /\/deep\//g,
      /::content/g
    ];

  function stylesToCssText(styles, preserveComments) {
    var cssText = "";
    Array.prototype.forEach.call(styles, function(s) {
      cssText += s.textContent + "\n\n";
    });

    if (!preserveComments) {
      cssText = cssText.replace(cssCommentRe, "");
    }

    return cssText;
  }

  function cssTextToStyle(cssText) {
    var style = document.createElement("style");
    style.textContent = cssText;
    return style;
  }

  function cssToRules(cssText) {
    var style = cssTextToStyle(cssText);
    document.head.appendChild(style);
    var rules = [];

    if (style.sheet) {
      try {
        rules = style.sheet.cssRules;
      } catch (e) {}
    } else {
      console.warn("sheet not found", style);
    }

    style.parentNode.removeChild(style);
    return rules;
  }

  var frame = document.createElement("iframe");
  frame.style.display = "none";

  function initFrame() {
    frame.initialized = true;
    document.body.appendChild(frame);
    var doc = frame.contentDocument;
    var base = doc.createElement("base");
    base.href = document.baseURI;
    doc.head.appendChild(base);
  }

  function inFrame(fn) {
    if (!frame.initialized) {
      initFrame();
    }

    document.body.appendChild(frame);
    fn(frame.contentDocument);
    document.body.removeChild(frame);
  }

  var isChrome = navigator.userAgent.match("Chrome");

  function withCssRules(cssText, callback) {
    if (!callback) {
      return;
    }

    var rules;

    if (cssText.match("@import") && isChrome) {
      var style = cssTextToStyle(cssText);
      inFrame(function(doc) {
        doc.head.appendChild(style.impl);
        rules = Array.prototype.slice.call(style.sheet.cssRules, 0);
        callback(rules);
      });
    } else {
      rules = cssToRules(cssText);
      callback(rules);
    }
  }

  function rulesToCss(cssRules) {
    for (var i = 0, css = []; i < cssRules.length; i++) {
      css.push(cssRules[i].cssText);
    }

    return css.join("\n\n");
  }

  function addCssToDocument(cssText) {
    if (cssText) {
      getSheet().appendChild(document.createTextNode(cssText));
    }
  }

  function addOwnSheet(cssText, name) {
    var style = cssTextToStyle(cssText);
    style.setAttribute(name, "");
    style.setAttribute(SHIMMED_ATTRIBUTE, "");
    document.head.appendChild(style);
  }

  var SHIM_ATTRIBUTE = "shim-shadowdom";
  var SHIMMED_ATTRIBUTE = "shim-shadowdom-css";
  var NO_SHIM_ATTRIBUTE = "no-shim";
  var sheet;

  function getSheet() {
    if (!sheet) {
      sheet = document.createElement("style");
      sheet.setAttribute(SHIMMED_ATTRIBUTE, "");
      sheet[SHIMMED_ATTRIBUTE] = true;
    }

    return sheet;
  }

  if (window.ShadowDOMPolyfill) {
    addCssToDocument("style { display: none !important; }\n");
    var doc = ShadowDOMPolyfill.wrap(document);
    var head = doc.querySelector("head");
    head.insertBefore(getSheet(), head.childNodes[0]);
    document.addEventListener("DOMContentLoaded", function() {
      var urlResolver = scope.urlResolver;

      if (window.HTMLImports && !HTMLImports.useNative) {
        var SHIM_SHEET_SELECTOR =
          "link[rel=stylesheet]" + "[" + SHIM_ATTRIBUTE + "]";
        var SHIM_STYLE_SELECTOR = "style[" + SHIM_ATTRIBUTE + "]";
        HTMLImports.importer.documentPreloadSelectors +=
          "," + SHIM_SHEET_SELECTOR;
        HTMLImports.importer.importsPreloadSelectors +=
          "," + SHIM_SHEET_SELECTOR;
        HTMLImports.parser.documentSelectors = [
          HTMLImports.parser.documentSelectors,
          SHIM_SHEET_SELECTOR,
          SHIM_STYLE_SELECTOR
        ].join(",");
        var originalParseGeneric = HTMLImports.parser.parseGeneric;

        HTMLImports.parser.parseGeneric = function(elt) {
          if (elt[SHIMMED_ATTRIBUTE]) {
            return;
          }

          var style = elt.__importElement || elt;

          if (!style.hasAttribute(SHIM_ATTRIBUTE)) {
            originalParseGeneric.call(this, elt);
            return;
          }

          if (elt.__resource) {
            style = elt.ownerDocument.createElement("style");
            style.textContent = elt.__resource;
          }

          HTMLImports.path.resolveUrlsInStyle(style);
          style.textContent = ShadowCSS.shimStyle(style);
          style.removeAttribute(SHIM_ATTRIBUTE, "");
          style.setAttribute(SHIMMED_ATTRIBUTE, "");
          style[SHIMMED_ATTRIBUTE] = true;

          if (style.parentNode !== head) {
            if (elt.parentNode === head) {
              head.replaceChild(style, elt);
            } else {
              this.addElementToDocument(style);
            }
          }

          style.__importParsed = true;
          this.markParsingComplete(elt);
          this.parseNext();
        };

        var hasResource = HTMLImports.parser.hasResource;

        HTMLImports.parser.hasResource = function(node) {
          if (
            node.localName === "link" &&
            node.rel === "stylesheet" &&
            node.hasAttribute(SHIM_ATTRIBUTE)
          ) {
            return node.__resource;
          } else {
            return hasResource.call(this, node);
          }
        };
      }
    });
  }

  scope.ShadowCSS = ShadowCSS;
}
