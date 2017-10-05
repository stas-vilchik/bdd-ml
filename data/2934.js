{
  const field = fields[fieldName];
  let suffix = "";
  if (field.optional || field.default != null) suffix += "?";
  let typeAnnotation = "any";
  const validate = field.validate;

  if (validate) {
    if (validate.oneOf) {
      typeAnnotation = validate.oneOf
        .map(function(val) {
          return JSON.stringify(val);
        })
        .join(" | ");
    }

    if (validate.type) {
      typeAnnotation = validate.type;

      if (typeAnnotation === "array") {
        typeAnnotation = "Array<any>";
      }
    }

    if (validate.oneOfNodeTypes) {
      const types = validate.oneOfNodeTypes.map(
        type => `${NODE_PREFIX}${type}`
      );
      typeAnnotation = types.join(" | ");
      if (suffix === "?") typeAnnotation = "?" + typeAnnotation;
    }
  }

  if (typeAnnotation) {
    suffix += ": " + typeAnnotation;
  }

  args.push(t.toBindingIdentifierName(fieldName) + suffix);

  if (t.isValidIdentifier(fieldName)) {
    struct.push(fieldName + suffix + ";");
  }
}
