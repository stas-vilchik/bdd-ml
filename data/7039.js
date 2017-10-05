{
  var records = this.observer.records_;
  var length = records.length;

  if (records.length > 0) {
    var lastRecord = records[length - 1];
    var recordToReplaceLast = selectRecord(lastRecord, record);

    if (recordToReplaceLast) {
      records[length - 1] = recordToReplaceLast;
      return;
    }
  } else {
    scheduleCallback(this.observer);
  }

  records[length] = record;
}
