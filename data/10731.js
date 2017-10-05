{
  var validation = this.validation;
  return Object.keys(validation).every(function(key) {
    return validation[key];
  });
}
