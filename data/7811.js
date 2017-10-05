{
  if (page.path.includes("docs/error-decoder.html")) {
    page.matchPath = "docs/error-decoder:path?";
    page.context.slug = "docs/error-decoder.html";
    createPage(page);
  }

  resolvePromise();
}
