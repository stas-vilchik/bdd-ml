{
  if (
    el.tag === "cell" &&
    !el.attrsList.some(function(item) {
      return item.name === "append";
    })
  ) {
    el.attrsMap.append = "tree";
    el.attrsList.push({
      name: "append",
      value: "tree"
    });
  }

  if (el.attrsMap.append === "tree") {
    el.appendAsTree = true;
  }
}
