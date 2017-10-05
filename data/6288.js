{
  switch (answers.handle) {
    case "ok":
      successful.push(pr);
      break;

    case "skip":
      skipped.push(pr);
      break;

    case "abort":
      return rej(pr.number);
  }

  res(pr.number);
}
