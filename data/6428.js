{
  return roots.map(tag => dumpSubtree(tag, 0)).join("\n");

  function dumpSubtree(tag, indent) {
    const info = views.get(tag);
    let out = "";
    out +=
      " ".repeat(indent) + info.viewName + " " + JSON.stringify(info.props);

    for (const child of info.children) {
      out += "\n" + dumpSubtree(child, indent + 2);
    }

    return out;
  }
}
