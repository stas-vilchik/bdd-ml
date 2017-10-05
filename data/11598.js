{
  if (contentPlaceholder === void 0)
    contentPlaceholder = "<!--vue-ssr-outlet-->";

  if (typeof template === "object") {
    return template;
  }

  var i = template.indexOf("</head>");
  var j = template.indexOf(contentPlaceholder);

  if (j < 0) {
    throw new Error("Content placeholder not found in template.");
  }

  if (i < 0) {
    i = template.indexOf("<body>");

    if (i < 0) {
      i = j;
    }
  }

  return {
    head: compile$1(template.slice(0, i), compileOptions),
    neck: compile$1(template.slice(i, j), compileOptions),
    tail: compile$1(
      template.slice(j + contentPlaceholder.length),
      compileOptions
    )
  };
}
