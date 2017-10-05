{
  var ownerName;

  if (owner != null) {
    ownerName = getComponentName(owner);
  } else {
    ownerName = getCurrentFiberOwnerName();
  }

  if (ownerName) {
    return "\n\nCheck the render method of `" + ownerName + "`.";
  }

  return "";
}
