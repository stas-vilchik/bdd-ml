{
  invariant(
    false,
    "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available " +
      "in the browser. Use ReactDOMServer.renderToStaticMarkup() instead."
  );
}
