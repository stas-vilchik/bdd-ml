{
  if (options === void 0) options = {};
  var sfc = {
    template: null,
    script: null,
    styles: [],
    customBlocks: []
  };
  var depth = 0;
  var currentBlock = null;

  function start(tag, attrs, unary, start, end) {
    if (depth === 0) {
      currentBlock = {
        type: tag,
        content: "",
        start: end,
        attrs: attrs.reduce(function(cumulated, ref) {
          var name = ref.name;
          var value = ref.value;
          cumulated[name] = value || true;
          return cumulated;
        }, Object.create(null))
      };

      if (isSpecialTag(tag)) {
        checkAttrs(currentBlock, attrs);

        if (tag === "style") {
          sfc.styles.push(currentBlock);
        } else {
          sfc[tag] = currentBlock;
        }
      } else {
        sfc.customBlocks.push(currentBlock);
      }
    }

    if (!unary) {
      depth++;
    }
  }

  function checkAttrs(block, attrs) {
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];

      if (attr.name === "lang") {
        block.lang = attr.value;
      }

      if (attr.name === "scoped") {
        block.scoped = true;
      }

      if (attr.name === "module") {
        block.module = attr.value || true;
      }

      if (attr.name === "src") {
        block.src = attr.value;
      }
    }
  }

  function end(tag, start, end) {
    if (depth === 1 && currentBlock) {
      currentBlock.end = start;
      var text = deindent(content.slice(currentBlock.start, currentBlock.end));

      if (currentBlock.type !== "template" && options.pad) {
        text = padContent(currentBlock, options.pad) + text;
      }

      currentBlock.content = text;
      currentBlock = null;
    }

    depth--;
  }

  function padContent(block, pad) {
    if (pad === "space") {
      return content.slice(0, block.start).replace(replaceRE, " ");
    } else {
      var offset = content.slice(0, block.start).split(splitRE).length;
      var padChar = block.type === "script" && !block.lang ? "//\n" : "\n";
      return Array(offset).join(padChar);
    }
  }

  parseHTML(content, {
    start: start,
    end: end
  });
  return sfc;
}
