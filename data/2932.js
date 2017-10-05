{
  const defaultValue = types.NODE_FIELDS[key][field].default;
  const fieldDescription = ["`" + field + "`"];
  const validator = types.NODE_FIELDS[key][field].validate;

  if (customTypes[key] && customTypes[key][field]) {
    fieldDescription.push(`: ${customTypes[key][field]}`);
  } else if (validator) {
    try {
      fieldDescription.push(": `" + getType(validator) + "`");
    } catch (ex) {
      if (ex.code === "UNEXPECTED_VALIDATOR_TYPE") {
        console.log("Unrecognised validator type for " + key + "." + field);
        console.dir(ex.validator, {
          depth: 10,
          colors: true
        });
      }
    }
  }

  if (defaultValue !== null || types.NODE_FIELDS[key][field].optional) {
    fieldDescription.push(" (default: `" + util.inspect(defaultValue) + "`)");
  } else {
    fieldDescription.push(" (required)");
  }

  readme.push(" - " + fieldDescription.join(""));
}
