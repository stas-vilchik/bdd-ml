{
  if (!component) {
    return;
  }

  if (typeof component === "string") {
    components[component] = true;
  } else if (
    typeof component === "object" &&
    typeof component.type === "string"
  ) {
    components[component.type] = component;
  }
}
