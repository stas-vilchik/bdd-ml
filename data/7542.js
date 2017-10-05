{
  if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
    return null;
  }

  return new Error(
    "You provided a `checked` prop to a form field without an " +
      "`onChange` handler. This will render a read-only field. If " +
      "the field should be mutable use `defaultChecked`. Otherwise, " +
      "set either `onChange` or `readOnly`."
  );
}
