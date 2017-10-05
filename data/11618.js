{
  if (!alreadyRendered(file)) {
    return (
      '<link rel="prefetch" href="' + this$1.publicPath + "/" + file + '">'
    );
  } else {
    return "";
  }
}
