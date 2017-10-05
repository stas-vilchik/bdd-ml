{
  return (
    (attr === "value" && acceptValue(tag) && type !== "button") ||
    (attr === "selected" && tag === "option") ||
    (attr === "checked" && tag === "input") ||
    (attr === "muted" && tag === "video")
  );
}
