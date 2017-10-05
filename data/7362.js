{
  if (type !== "input" && type !== "textarea" && type !== "select") {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    warning(
      false,
      "`value` prop on `%s` should not be null. " +
        "Consider using the empty string to clear the component or `undefined` " +
        "for uncontrolled components.%s",
      type,
      getStackAddendum(debugID)
    );
    didWarnValueNull = true;
  }
}
