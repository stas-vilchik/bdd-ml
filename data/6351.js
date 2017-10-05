{
  console.log(Stats.printResults());
  Stats.saveResults();

  if (argv["extract-errors"]) {
    console.warn(
      "\nWarning: this build was created with --extract-errors enabled.\n" +
        "this will result in extremely slow builds and should only be\n" +
        "used when the error map needs to be rebuilt.\n"
    );
  }
}
