{
  let type;

  if (model.schema) {
    type = model.schema.type || model.schema.$ref;
    type =
      type === "array"
        ? model.schema.items.type || model.schema.items.$ref
        : type;
  } else {
    type = model.type || model.$ref;
    type = type === "array" ? model.items.type || model.items.$ref : type;
  }

  type = type || "";
  type =
    type[0] === "#"
      ? type
          .slice(2)
          .split("/")
          .join(".")
      : type;
  return type;
}
