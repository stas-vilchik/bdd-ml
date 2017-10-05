{
  var impl;

  if (formElement instanceof OriginalFormData) {
    impl = formElement;
  } else {
    impl = new OriginalFormData(formElement && unwrap(formElement));
  }

  setWrapper(impl, this);
}
