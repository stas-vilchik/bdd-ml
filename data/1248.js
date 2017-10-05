{
  console.log("async wrapper:", this === "foo");

  (() => {
    console.log("nested arrow:", this === "foo");
  })();
}
