{
  if (!tests.length) {
    return;
  }

  const desc = tests.length + " " + label;
  badnews.push(desc);
  badnewsDetails.push(desc + ":");
  badnewsDetails.push(
    ...tests.map(function(test) {
      return test.id || test;
    })
  );
}
