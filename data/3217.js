{
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(10, "")(2.1),
    "2"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "")(2.01),
    "2"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "")(2.11),
    "2.1"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(10, "e")(2.1),
    "2e+0"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "e")(2.01),
    "2.0e+0"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "e")(2.11),
    "2.1e+0"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(10, "g")(2.1),
    "2"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "g")(2.01),
    "2.0"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "g")(2.11),
    "2.1"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(10, "r")(2.1e6),
    "2000000"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "r")(2.01e6),
    "2000000"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 9])
      .tickFormat(100, "r")(2.11e6),
    "2100000"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 0.9])
      .tickFormat(10, "p")(0.21),
    "20%"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0.19, 0.21])
      .tickFormat(10, "p")(0.201),
    "20.1%"
  );
  test.end();
}
