{
  var nbQueries = Math.floor(Math.random() * 10 + 1);

  if (!object) {
    object = {};
  }

  object.lastMutationId = counter;
  object.nbQueries = nbQueries;

  if (!object.lastSample) {
    object.lastSample = {};
  }

  if (!object.lastSample.topFiveQueries) {
    object.lastSample.topFiveQueries = [];
  }

  if (keepIdentity) {
    if (!object.lastSample.queries) {
      object.lastSample.queries = [];

      for (var l = 0; l < 12; l++) {
        object.lastSample.queries[l] = cleanQuery();
      }
    }

    for (var j in object.lastSample.queries) {
      var value = object.lastSample.queries[j];

      if (j <= nbQueries) {
        updateQuery(value);
      } else {
        cleanQuery(value);
      }
    }
  } else {
    object.lastSample.queries = [];

    for (var j = 0; j < 12; j++) {
      if (j < nbQueries) {
        var value = updateQuery(cleanQuery());
        object.lastSample.queries.push(value);
      } else {
        object.lastSample.queries.push(cleanQuery());
      }
    }
  }

  for (var i = 0; i < 5; i++) {
    var source = object.lastSample.queries[i];
    object.lastSample.topFiveQueries[i] = source;
  }

  object.lastSample.nbQueries = nbQueries;
  object.lastSample.countClassName = countClassName(nbQueries);
  return object;
}
