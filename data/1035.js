{
  loop: while (true) {
    let {
      what,
      value
    } = yield "iteration";

    switch (what) {
      case "one":
        if (value === 1) {
          break loop;
        } else if (value === 2) {
          break loop;
        }

        break;

      case "two":
        ["a", "b"].map(function (v) {
          return value + v;
        });
        break loop;
        break;

      case "three":
        break loop;
        break;
    }
  }
}