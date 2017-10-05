{
  var val = fn(..._arguments);
  return {
    v: val.test(function() {
      console.log(val);
    })
  };
}
