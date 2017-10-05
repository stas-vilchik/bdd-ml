{
  vorpal
    .command("q")
    .hidden()
    .action((args, cb) => {
      vorpal.exec("exit").then(cb);
    });
}
