{
  perf.measure(name, startTag, endTag);
  perf.clearMarks(startTag);
  perf.clearMarks(endTag);
  perf.clearMeasures(name);
}
