{
  if (!event) return false;

  switch (event.type) {
    case "abort":
    case "error":
    case "select":
    case "change":
    case "load":
    case "reset":
    case "resize":
    case "scroll":
    case "selectstart":
      return true;
  }

  return false;
}
