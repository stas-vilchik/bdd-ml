{
  ("use strict");

  var registerWrapper = scope.registerWrapper;
  var setWrapper = scope.setWrapper;
  var unwrap = scope.unwrap;
  var OriginalFormData = window.FormData;
  if (!OriginalFormData) return;

  function FormData(formElement) {
    var impl;

    if (formElement instanceof OriginalFormData) {
      impl = formElement;
    } else {
      impl = new OriginalFormData(formElement && unwrap(formElement));
    }

    setWrapper(impl, this);
  }

  registerWrapper(OriginalFormData, FormData, new OriginalFormData());
  scope.wrappers.FormData = FormData;
}
