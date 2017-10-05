{
  var pos, lowerCasedTagName;

  if (start == null) {
    start = index;
  }

  if (end == null) {
    end = index;
  }

  if (tagName) {
    lowerCasedTagName = tagName.toLowerCase();
  }

  if (tagName) {
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].lowerCasedTag === lowerCasedTagName) {
        break;
      }
    }
  } else {
    pos = 0;
  }

  if (pos >= 0) {
    for (var i = stack.length - 1; i >= pos; i--) {
      if (
        "development" !== "production" &&
        (i > pos || !tagName) &&
        options.warn
      ) {
        options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
      }

      if (options.end) {
        options.end(stack[i].tag, start, end);
      }
    }

    stack.length = pos;
    lastTag = pos && stack[pos - 1].tag;
  } else if (lowerCasedTagName === "br") {
    if (options.start) {
      options.start(tagName, [], true, start, end);
    }
  } else if (lowerCasedTagName === "p") {
    if (options.start) {
      options.start(tagName, [], false, start, end);
    }

    if (options.end) {
      options.end(tagName, start, end);
    }
  }
}
