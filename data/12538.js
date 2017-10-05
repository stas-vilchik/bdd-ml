{
  browser.assert.count("td", data.length * columns.length);

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < columns.length; j++) {
      browser.assert.containsText(
        "tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")",
        data[i][columns[j]]
      );
    }
  }
}
