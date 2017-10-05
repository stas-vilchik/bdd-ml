{
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    contentKey =
      "textContent" in document.documentElement ? "textContent" : "innerText";
  }

  return contentKey;
}
