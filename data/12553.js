{
  return browser
    .moveToElement(".todo:nth-child(" + n + ")", 10, 10)
    .click(".todo:nth-child(" + n + ") .destroy");
}
