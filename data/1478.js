{
  babelHelpers
    .get(SubFoo.__proto__ || Object.getPrototypeOf(SubFoo), "talk", this)
    .call(this);
  console.log("SubFoo.talk");
}
