{
  if (
    !props[propName] ||
    hasReadOnlyValue[props.type] ||
    props.onChange ||
    props.readOnly ||
    props.disabled
  ) {
    return null;
  }

  return new Error(
    "You provided a `value` prop to a form field without an " +
      "`onChange` handler. This will render a read-only field. If " +
      "the field should be mutable use `defaultValue`. Otherwise, " +
      "set either `onChange` or `readOnly`."
  );
}
