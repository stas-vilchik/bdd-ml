{
  warn$2 = options.warn || baseWarn;
  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  transforms = pluckModuleFunction(options.modules, "transformNode");
  preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
  postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
  delimiters = options.delimiters;
  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre(element) {
    if (element.pre) {
      inVPre = false;
    }

    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start(tag, attrs, unary) {
      var ns =
        (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      if (isIE && ns === "svg") {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };

      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== "production" &&
          warn$2(
            "Templates should only be responsible for mapping the state to the " +
              "UI. Avoid placing tags with side-effects in your templates, such as " +
              "<" +
              tag +
              ">" +
              ", as they will not be parsed."
          );
      }

      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);

        if (element.pre) {
          inVPre = true;
        }
      }

      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }

      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);
        element.plain = !element.key && !attrs.length;
        processRef(element);
        processSlot(element);
        processComponent(element);

        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }

        processAttrs(element);
      }

      function checkRootConstraints(el) {
        {
          if (el.tag === "slot" || el.tag === "template") {
            warnOnce(
              "Cannot use <" +
                el.tag +
                "> as component root element because it may " +
                "contain multiple nodes."
            );
          }

          if (el.attrsMap.hasOwnProperty("v-for")) {
            warnOnce(
              "Cannot use v-for on stateful component root element because " +
                "it renders multiple elements."
            );
          }
        }
      }

      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
              "If you are using v-if on multiple elements, " +
              "use v-else-if to chain them instead."
          );
        }
      }

      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) {
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';
          (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[
            name
          ] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }

      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },
    end: function end() {
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];

      if (lastNode && lastNode.type === 3 && lastNode.text === " " && !inPre) {
        element.children.pop();
      }

      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },
    chars: function chars(text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              "Component template requires a root element, rather than just text."
            );
          } else if ((text = text.trim())) {
            warnOnce(
              'text "' + text + '" outside root element will be ignored.'
            );
          }
        }
        return;
      }

      if (
        isIE &&
        currentParent.tag === "textarea" &&
        currentParent.attrsMap.placeholder === text
      ) {
        return;
      }

      var children = currentParent.children;
      text =
        inPre || text.trim()
          ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
          : preserveWhitespace && children.length ? " " : "";

      if (text) {
        var expression;

        if (
          !inVPre &&
          text !== " " &&
          (expression = parseText(text, delimiters))
        ) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (
          text !== " " ||
          !children.length ||
          children[children.length - 1].text !== " "
        ) {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment(text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root;
}
