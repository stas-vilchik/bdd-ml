{
  const lines = content.split(os.EOL);
  let i = 1;

  for (; i < lines.length - 1; ++i) {
    if (lines[i] === "---") {
      break;
    }
  }

  return {
    header: lines.slice(1, i + 1).join("\n"),
    content: lines.slice(i + 1).join("\n")
  };
}
