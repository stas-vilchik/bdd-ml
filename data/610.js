{
  var instance = axios.create();

  for (var prop in axios) {
    if (
      [
        "Axios",
        "create",
        "Cancel",
        "CancelToken",
        "isCancel",
        "all",
        "spread",
        "default"
      ].indexOf(prop) > -1
    ) {
      continue;
    }

    expect(typeof instance[prop]).toBe(typeof axios[prop]);
  }
}
