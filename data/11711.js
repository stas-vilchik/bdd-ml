{
  if (pad === "space") {
    return content.slice(0, block.start).replace(replaceRE, " ");
  } else {
    var offset = content.slice(0, block.start).split(splitRE).length;
    var padChar = block.type === "script" && !block.lang ? "//\n" : "\n";
    return Array(offset).join(padChar);
  }
}
