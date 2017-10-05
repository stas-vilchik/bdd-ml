{
  console.error(
    "[vue-server-renderer] error when rendering async component:\n"
  );

  if (err) {
    console.error(err.stack);
  }

  context.write("<!--" + node.text + "-->", context.next);
}
