{
  if (validator.type) {
    return validator.type;
  } else if (validator.oneOfNodeTypes) {
    return validator.oneOfNodeTypes.join(" | ");
  } else if (validator.oneOfNodeOrValueTypes) {
    return validator.oneOfNodeOrValueTypes.join(" | ");
  } else if (validator.oneOf) {
    return validator.oneOf.map(val => util.inspect(val)).join(" | ");
  } else if (validator.chainOf) {
    if (
      validator.chainOf.length === 2 &&
      validator.chainOf[0].type === "array" &&
      validator.chainOf[1].each
    ) {
      return "Array<" + getType(validator.chainOf[1].each) + ">";
    }

    if (
      validator.chainOf.length === 2 &&
      validator.chainOf[0].type === "string" &&
      validator.chainOf[1].oneOf
    ) {
      return validator.chainOf[1].oneOf
        .map(function(val) {
          return JSON.stringify(val);
        })
        .join(" | ");
    }
  }

  const err = new Error("Unrecognised validator type");
  err.code = "UNEXPECTED_VALIDATOR_TYPE";
  err.validator = validator;
  throw err;
}
