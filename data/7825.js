{
  var oldData = data;

  if (!keepIdentity) {
    data = [];

    for (var i = 1; i <= ENV.rows; i++) {
      data.push({
        dbname: "cluster" + i,
        query: "",
        formatElapsed: "",
        elapsedClassName: ""
      });
      data.push({
        dbname: "cluster" + i + " slave",
        query: "",
        formatElapsed: "",
        elapsedClassName: ""
      });
    }
  }

  if (!data) {
    data = [];

    for (var i = 1; i <= ENV.rows; i++) {
      data.push({
        dbname: "cluster" + i
      });
      data.push({
        dbname: "cluster" + i + " slave"
      });
    }

    oldData = data;
  }

  for (var i in data) {
    var row = data[i];

    if (!keepIdentity && oldData && oldData[i]) {
      row.lastSample = oldData[i].lastSample;
    }

    if (!row.lastSample || Math.random() < ENV.mutations()) {
      counter = counter + 1;

      if (!keepIdentity) {
        row.lastSample = null;
      }

      generateRow(row, keepIdentity, counter);
    } else {
      data[i] = oldData[i];
    }
  }

  first = false;
  return {
    toArray: function() {
      return data;
    }
  };
}
