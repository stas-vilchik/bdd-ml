{
  switch (event.type) {
    case "load":
    case "beforeunload":
    case "unload":
      return true;
  }

  return false;
}
