{
  this;

  () => this;

  function x() {
    this;

    () => {
      this;
    };

    async () => {
      this;
    };
  }
}
