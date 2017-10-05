{
  var foo = () => this;

  if (true) {
    console.log(super(), foo());
  } else {
    super();
    console.log(foo());
  }
}