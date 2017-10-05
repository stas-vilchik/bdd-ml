{
  t.hook || (t.hook = {});

  for (var e = 0; e < ko.length; e++) {
    var n = ko[e],
      r = t.hook[n],
      i = Ao[n];
    t.hook[n] = r ? ee(i, r) : i;
  }
}
