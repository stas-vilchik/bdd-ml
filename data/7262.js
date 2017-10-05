{
  invariant(
    false,
    "ReactDOMServer.renderToNodeStream(): The streaming API is not available " +
      "in the browser. Use ReactDOMServer.renderToString() instead."
  );
}
