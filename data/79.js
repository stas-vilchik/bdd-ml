{
  i = line.indexOf(":");
  key = utils.trim(line.substr(0, i)).toLowerCase();
  val = utils.trim(line.substr(i + 1));

  if (key) {
    parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
  }
}
