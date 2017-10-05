{
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
