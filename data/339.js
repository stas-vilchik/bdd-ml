{
  i = line.indexOf(":");
  key = utils.trim(line.substr(0, i)).toLowerCase();
  val = utils.trim(line.substr(i + 1));

  if (key) {
    if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
      return;
    }

    if (key === "set-cookie") {
      parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  }
}
